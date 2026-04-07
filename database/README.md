# WMS 365 Dispatch Database Notes

This schema is intended for Railway PostgreSQL.

Key rules:

- every operational table is tenant-scoped through `tenant_id`
- customers, carriers, drivers, shipments, BOLs, route runs, route stops, documents, and audit logs stay inside one tenant
- `customer_aliases` supports the customer-entry popup flow so the system can suggest or learn alternate customer inputs later

Expected customer-entry flow:

1. Dispatcher types a customer code or name.
2. Exact tenant match resolves automatically.
3. If no exact tenant match exists, the UI shows closest tenant matches.
4. Dispatcher can either choose an existing customer or add a new one.
5. The new customer is stored under the current tenant only.
