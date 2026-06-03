# OTC Order Cockpit (SAP Fiori / SAPUI5)

A freestyle **SAPUI5** application that tracks sales orders across the
**Order-to-Cash** chain — a master list of orders and a detail view showing each
order's process journey (Create Sales Order → Credit Check → Confirm → Check
Availability → Delivery → Pick & Pack → Post Goods Issue → Invoice → Payment),
with credit-block and ATP/backorder flags.

Built with the Fiori **Horizon** theme and a master–detail `SplitApp` layout.
It runs as a **fully static site** — OpenUI5 is loaded from the public CDN at
runtime, so there is no build step and no backend.

> Portfolio project pairing SAP SD / OTC functional knowledge with hands-on
> SAPUI5 (views, data binding, formatters, controls).

## What it shows

- **Master list** — all sales orders with value, customer, region/segment, and a
  colour-coded fulfillment status; live search by order id or customer.
- **Detail view** — an `ObjectHeader` with fulfillment / credit / availability
  statuses, the **Order-to-Cash journey** as a status-coded step list, and a
  **line-items** table with per-item ATP status.
- Realistic states: completed orders, an order on **credit hold**, orders stuck
  on **backorder**, a **partial** availability case, and an order **in credit
  review**.

## Run it

UI5 loads its modules over HTTP, so open it through a web server (not by
double-clicking the file):

```bash
# from the project folder
python -m http.server 8000
# then open http://localhost:8000
```

On **GitHub Pages** it just works — no server needed.

## How it's built

```
index.html                     CDN bootstrap + ComponentSupport
manifest.json                  app descriptor: root view + JSON model
Component.js                   UIComponent
view/App.view.xml              SplitApp: master list + detail (XML view)
controller/App.controller.js   selection + search logic
model/formatter.js             status -> Fiori ValueState / icon mappings
model/orders.json              mock OTC data (the "backend")
```

The data is a **mock JSON model** standing in for an OData service, so the app
needs no live SAP system. Swapping `model/orders.json` for a real OData
`dataSource` in `manifest.json` is all it would take to point this at a backend.

*All data is fictional and for demonstration only.*
