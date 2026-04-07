# WMS 365 Dispatch Rebuild

This workspace now contains a clean modern prototype for rebuilding the WMS 365 Dispatch website and dispatch portal.

The current rebuild is based on both:

- the legacy site screenshots
- the original Excel workflow in `HDS Project v3 variable.xlsx`

The workbook structure directly informed the modern flow:

- `Enter Packing Slip` -> shipment intake
- `BOL Input` and `BOL FORM` -> BOL staging and print preview
- `CDS` / `Customer Lookup` -> customer master data
- `TRUCK 1 RUN` / `TRUCK 2 RUN` -> route sheet generation

## What is included

- `index.html`: a modern operations-focused landing page and dispatch console
- `styles.css`: a responsive visual system with a new brand direction
- `app.js`: live demo behavior for tenant-aware shipment creation, BOL generation, carrier and driver assignment, and route publishing
- `legacy/`: extracted archive from the original zip for reference only
- `MODERNIZATION_PLAN.md`: workflow, tenancy, mobile, and Railway direction for the production rebuild

## What this prototype demonstrates

- A clearer front door for the product instead of an outdated login-first shell
- A tenant-scoped workflow where customers, carriers, drivers, shipments, BOLs, and routes stay inside one company workspace
- A cleaner operational sequence: shipment -> BOL -> carrier assignment -> driver assignment -> route publish -> mobile sync
- A driver-mobile handoff view that shows how routes can be pushed to a driver app and synced back into dispatch
- A visual direction that feels newer, more operational, and more trustworthy for customers and carriers

## Recommended next production steps

1. Rebuild this as a real multi-tenant app with Next.js for the web portal and PostgreSQL for tenant-scoped data.
2. Add authentication and role-based access for platform admins, tenant admins, dispatchers, warehouse users, carrier dispatch, and drivers.
3. Create backend models for tenants, users, customers, carriers, drivers, shipments, BOLs, route runs, route stops, documents, and device tokens.
4. Add PDF generation for BOLs and route sheets plus secure document storage for POD photos and signatures.
5. Build the driver mobile app in Expo React Native so routes can be delivered directly to the assigned driver.
6. Add audit logs, status history, search, filters, alerts, and integrations once the core dispatch workflow is stable.

## Product Direction

The production version should follow this operating model:

1. A company signs up and becomes a tenant.
2. Tenant users only see their own company workspace.
3. Customer, carrier, and driver master data live inside that tenant.
4. Dispatch creates shipments and generates BOLs.
5. Shipments are assigned to a carrier, truck, and driver.
6. Assigned shipments are grouped into a route run.
7. The route is published to the driver mobile app.
8. Driver status, POD, and exceptions sync back to the web dashboard.

## Running it

Open `index.html` in a browser.

If you want, the next step I can take is converting this prototype into a real Next.js multi-tenant app structure so it is ready for PostgreSQL, Expo mobile, and Railway deployment.

## Deployment Quick Start

This repo now includes:

- `package.json` with an `npm start` command
- `server.js` to serve the static prototype on Railway
- `.gitignore` for local and deployment-safe defaults

That means the current prototype can be pushed to GitHub and deployed to Railway as a single web service before the larger Next.js rebuild begins.
