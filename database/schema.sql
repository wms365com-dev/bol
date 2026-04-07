create extension if not exists pgcrypto;

create table tenants (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table tenant_users (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  email text not null,
  full_name text not null,
  role text not null,
  auth_provider_id text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, email)
);

create table customers (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  code text not null,
  name text not null,
  legal_name text,
  address_line_1 text,
  address_line_2 text,
  city text,
  state_province text,
  postal_code text,
  country_code text not null default 'CA',
  phone text,
  email text,
  ship_to_code text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, code)
);

create table customer_aliases (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  customer_id uuid not null references customers(id) on delete cascade,
  alias_text text not null,
  created_at timestamptz not null default now(),
  unique (tenant_id, alias_text)
);

create table carriers (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  code text not null,
  name text not null,
  scac text,
  address_line_1 text,
  address_line_2 text,
  city text,
  state_province text,
  postal_code text,
  country_code text not null default 'CA',
  phone text,
  fax text,
  cell text,
  email text,
  website text,
  supports_ltl boolean not null default false,
  supports_ftl boolean not null default false,
  supports_drayage boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, code)
);

create table drivers (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  carrier_id uuid references carriers(id) on delete set null,
  code text,
  full_name text not null,
  phone text,
  email text,
  default_truck_label text,
  device_platform text,
  device_status text not null default 'offline',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table shipments (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  customer_id uuid references customers(id) on delete set null,
  batch_id text not null,
  customer_number text,
  customer_po text,
  order_number text,
  status text not null default 'draft',
  route_status text not null default 'draft',
  start_date date,
  cancel_date date,
  route_date date,
  shipped_date date,
  delivery_date date,
  delivery_start time,
  delivery_end time,
  sales_person text,
  truck_label text,
  units numeric(12, 2),
  cartons numeric(12, 2),
  pallets numeric(12, 2),
  weight numeric(12, 2),
  height numeric(12, 2),
  freight_class text,
  cube numeric(12, 2),
  comments text,
  check_or_cash text,
  cod_amount numeric(12, 2),
  routed_date date,
  authorization text,
  approved_by text,
  approval text,
  scac text,
  email_subject text,
  rfq_subject text,
  dept text,
  commodity text,
  ship_from_name text,
  ship_from_address text,
  ship_to_name text,
  ship_to_address text,
  created_by_user_id uuid references tenant_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, batch_id)
);

create table bills_of_lading (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  shipment_id uuid not null references shipments(id) on delete cascade,
  bol_number text not null,
  status text not null default 'created',
  pdf_storage_key text,
  generated_by_user_id uuid references tenant_users(id) on delete set null,
  generated_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  unique (tenant_id, bol_number),
  unique (shipment_id)
);

create table route_runs (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  carrier_id uuid references carriers(id) on delete set null,
  driver_id uuid references drivers(id) on delete set null,
  route_label text not null,
  truck_label text,
  run_date date not null,
  status text not null default 'draft',
  published_at timestamptz,
  accepted_at timestamptz,
  completed_at timestamptz,
  created_by_user_id uuid references tenant_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, route_label)
);

create table route_stops (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  route_run_id uuid not null references route_runs(id) on delete cascade,
  shipment_id uuid not null references shipments(id) on delete cascade,
  stop_number integer not null,
  status text not null default 'pending',
  arrived_at timestamptz,
  delivered_at timestamptz,
  exception_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (route_run_id, stop_number),
  unique (shipment_id)
);

create table documents (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  shipment_id uuid references shipments(id) on delete cascade,
  route_run_id uuid references route_runs(id) on delete cascade,
  bill_of_lading_id uuid references bills_of_lading(id) on delete cascade,
  document_type text not null,
  storage_key text not null,
  mime_type text,
  created_at timestamptz not null default now()
);

create table audit_logs (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id) on delete cascade,
  entity_type text not null,
  entity_id uuid not null,
  action text not null,
  actor_user_id uuid references tenant_users(id) on delete set null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index idx_customers_tenant_name on customers (tenant_id, name);
create index idx_customer_aliases_tenant_alias on customer_aliases (tenant_id, alias_text);
create index idx_carriers_tenant_name on carriers (tenant_id, name);
create index idx_drivers_tenant_name on drivers (tenant_id, full_name);
create index idx_shipments_tenant_status on shipments (tenant_id, status);
create index idx_shipments_tenant_route_date on shipments (tenant_id, route_date);
create index idx_bills_of_lading_tenant_bol on bills_of_lading (tenant_id, bol_number);
create index idx_route_runs_tenant_run_date on route_runs (tenant_id, run_date);
create index idx_route_stops_route_stop_number on route_stops (route_run_id, stop_number);
create index idx_audit_logs_tenant_entity on audit_logs (tenant_id, entity_type, entity_id);
