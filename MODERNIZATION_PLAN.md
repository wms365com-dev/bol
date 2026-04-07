# WMS 365 Dispatch Modernization Plan

## Goal

Rebuild the original Excel-driven workflow and the legacy website into a modern multi-tenant freight platform that can:

- create shipments
- generate BOLs
- assign shipments to trucking companies
- group shipments into truck runs
- send route sheets to a driver mobile app
- keep each company's data fully isolated

## Workflow Review

The current legacy flow basically makes sense, but it needs one important restructuring:

1. Company signs up and becomes a tenant.
2. Users are created under that tenant.
3. Customer master data and carrier master data are loaded for that tenant.
4. Shipment is created from batch / PO / order data.
5. Freight details are completed or validated.
6. BOL is generated for the shipment.
7. Shipment is assigned to a carrier, truck, and driver.
8. One or more assigned shipments are grouped into a route run.
9. Route sheet is sent to the driver mobile app.
10. Driver updates statuses and uploads POD / exceptions.

## Workflow Sanity Check

This workflow is sound if we keep these boundaries clear:

- `tenant`
  - the company account and its isolated data boundary
- `master data`
  - customers, carriers, drivers, locations, accessorial defaults
- `shipment`
  - the operational record created from batch / PO / order information
- `bill of lading`
  - the shipment document generated from shipment and customer data
- `assignment`
  - who is carrying it, which truck, and which driver owns execution
- `route run`
  - the grouped stop list the driver actually works from

The old system blurred those together because Excel formulas could jump between tabs.
The modern product should keep them separate so status changes, permissions, and reporting stay clean.

## Company Sign-Up And Onboarding

Recommended production onboarding:

1. Company signs up and becomes a new tenant.
2. A `tenant_admin` user is created for that company.
3. The company loads or imports customers, carriers, and drivers.
4. Additional users are invited under that same tenant.
5. Dispatch starts creating shipments.

Important:
Tenant users should land directly in their own company workspace.
Only internal WMS 365 staff should have a company switcher.

## What Should Change

### 1. Separate shipment creation from route creation

Right now the old system blends shipment entry, BOL work, and truck routing very tightly.
That worked in Excel, but it becomes hard to manage at scale.

Recommended structure:

- `Shipment` is the operational record.
- `BOL` is a document generated from a shipment.
- `Assignment` links a shipment to a carrier, truck, and driver.
- `Route Run` groups multiple assignments into a driver-ready delivery route.

That gives us cleaner status changes and much better reporting.

### 2. Make company isolation a first-class rule

This is the biggest platform requirement.
If companies sign up directly, their data cannot mix.

Recommended model:

- Every business record has a `tenant_id`
- Users belong to one tenant unless they are internal WMS 365 admins
- Customers, carriers, shipments, BOLs, route runs, drivers, documents, and notifications are all tenant-scoped
- Internal staff can switch tenants
- Tenant users should never see a company picker if they only belong to one tenant

Important:
Railway project/environment isolation is helpful for service networking, but it is **not** a substitute for tenant isolation inside the app.
Tenant separation still needs to be enforced in the database and application logic.

## Recommended Roles

- `platform_admin`
  - Internal WMS 365 team, can manage all tenants
- `tenant_admin`
  - Manages one company account, users, customers, carriers, and settings
- `dispatcher`
  - Creates shipments, generates BOLs, assigns carriers and drivers
- `warehouse_user`
  - Updates packing / carton / pallet information
- `carrier_dispatch`
  - Sees only loads assigned to that carrier
- `driver`
  - Uses the mobile app for route execution only

## Recommended Data Model

Core tables:

- `tenants`
- `users`
- `drivers`
- `customers`
- `carriers`
- `shipments`
- `shipment_items`
- `bills_of_lading`
- `assignments`
- `route_runs`
- `route_stops`
- `documents`
- `device_tokens`
- `audit_logs`

Important keys:

- every table above should include `tenant_id` except platform-global lookup tables
- `route_runs` should reference `carrier_id`, `driver_id`, `truck_label`, `run_date`
- `route_stops` should reference `route_run_id` and `shipment_id`

## Suggested Status Model

For shipments:

- `draft`
- `ready_for_bol`
- `bol_created`
- `assigned`
- `in_route`
- `delivered`
- `exception`
- `closed`

For route runs:

- `draft`
- `dispatched`
- `accepted`
- `in_progress`
- `completed`
- `exception`

## Mobile App

The mobile app should be a driver app, not a full dispatcher app.
That keeps it simple and useful.

Recommended first version:

- secure driver login
- today's assigned route runs
- ordered stop list
- customer name, address, phone, PO, pallets, cartons
- open in maps
- accept route
- mark en route / arrived / delivered
- upload photos
- capture signature
- exception notes
- offline caching with sync when signal returns

## Web To Mobile Contract

The mobile app should not work from raw shipment records directly.
It should receive a route-focused payload:

- `route_run`
  - route id, tenant id, carrier id, driver id, truck label, run date, status
- `route_stops`
  - ordered stop number, shipment id, customer name, address, contact info, pallets, cartons, window, notes
- `documents`
  - BOL PDF link, route sheet PDF link if needed
- `status events`
  - accepted, en route, arrived, delivered, exception, POD uploaded

That gives the driver exactly what they need without exposing unnecessary dispatcher-only screens.

## Sending Routes To Drivers

Recommended dispatch flow:

1. Dispatcher assigns shipments to a carrier and driver.
2. System creates or updates a `route_run`.
3. Server sends a push notification to the driver's device.
4. Driver opens the route in the mobile app.
5. Driver status updates sync back to the web dashboard.

## Mobile Tech Recommendation

For MVP:

- Web app: Next.js
- API: Next.js API routes or NestJS / Express
- Mobile app: Expo React Native

Why Expo for the first version:

- fastest path to iOS + Android
- good push notification support
- easy team iteration

Based on current Expo docs, push notifications are handled with `expo-notifications`, and production push setup uses native credentials with EAS builds.
Also, remote push notifications require a real device and development build rather than relying on Expo Go on Android.

## Railway Deployment Plan

Recommended Railway layout:

- `web`
  - Next.js frontend
- `api`
  - backend app
- `worker`
  - PDF generation, email jobs, push notifications
- `postgres`
  - main database
- `redis`
  - background job queue and caching

Based on current Railway docs:

- Railway supports private networking between services in the same project/environment via internal DNS under `railway.internal`
- new environments support both internal IPv4 and IPv6
- Node apps should listen on `::` for compatibility
- deploy your code with `railway up`
- PostgreSQL is available as an official template

## Railway Readiness Checklist

Before we deploy this to Railway, the app should have:

- tenant-aware auth and authorization
- PostgreSQL schema and migrations
- background jobs for PDFs, email, and push notifications
- object storage for signatures, POD photos, and generated files
- environment-based secrets management
- health checks and a production start command
- structured logs for dispatch and mobile sync events

## File Storage Recommendation

Inference:
For POD photos, signatures, and generated PDFs, use object storage rather than relying only on a local attached disk.
Railway volumes are useful for persistent service storage, but object storage is usually a better fit for user-uploaded files and multi-service access.

## Security Requirements

- tenant checks on every request
- role-based authorization
- audit logs for shipment, BOL, assignment, and route changes
- signed URLs for private documents
- encrypted credentials and secrets
- soft-delete plus archival for operational records

If PostgreSQL is used, add row-level security or an equivalent server-side enforcement layer so tenant data cannot leak through query mistakes.

## Product Improvements Over The Old System

- remove spreadsheet-style dependency between screens
- make BOL generation deterministic from shipment data
- separate master data from operational data
- support one-to-many routing where multiple shipments become one route run
- mobile-first driver experience
- real-time operational visibility
- better tenant isolation
- easier deployment and maintenance

## Recommended Build Order

### Phase 1

- tenant auth
- customer and carrier master data
- shipment creation
- BOL generation
- dispatch board

### Phase 2

- carrier assignment
- route run builder
- printable route sheet
- email / PDF delivery

### Phase 3

- driver mobile app
- push notifications
- POD photos and signature
- status tracking

### Phase 4

- analytics
- exception workflows
- billing hooks
- retailer / EDI integrations

## Immediate Next Step

The best next move is to rebuild the prototype into a real multi-tenant app structure with:

- tenant-aware authentication
- PostgreSQL schema
- shipment / BOL / route run models
- a dispatch board
- a driver mobile API contract

Once that exists, Railway deployment becomes straightforward instead of premature.
