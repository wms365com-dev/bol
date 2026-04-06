const companies = [
  {
    id: "pure-food",
    code: "PFE",
    name: "Pure Food By Estee",
    detail: "Retail home goods and store delivery"
  },
  {
    id: "best-buy",
    code: "BBE",
    name: "Best Buy Canada East",
    detail: "Regional electronics replenishment"
  },
  {
    id: "wg",
    code: "WGP",
    name: "WG Pro-Manufacturing Inc",
    detail: "Consumer packaging freight"
  },
  {
    id: "savours",
    code: "SVR",
    name: "Savours Fresh Market",
    detail: "Grocery and store replenishment"
  }
];

const customers = [
  {
    code: "WG",
    name: "WG Pro-Manufacturing Inc",
    address: "10 Auction Ln",
    city: "Brampton",
    state: "ON",
    zip: "L6T5V8",
    phone: "9057903377",
    companyIds: ["pure-food", "wg"]
  },
  {
    code: "UNFICON",
    name: "UNIFI CANADA",
    address: "8755 Keele Street",
    city: "Concord",
    state: "ON",
    zip: "L4K2N1",
    phone: "9999999999",
    companyIds: ["pure-food"]
  },
  {
    code: "SUGARDREAM",
    name: "Sugar Dream",
    address: "62 Buttermill Avenue",
    city: "Concord",
    state: "ON",
    zip: "L4X3X3",
    phone: "5149932754",
    companyIds: ["pure-food"]
  },
  {
    code: "SAVOURS",
    name: "SAVOURS FRESH MARKET",
    address: "3011 Bathurst St",
    city: "Toronto",
    state: "ON",
    zip: "M6B3B5",
    phone: "4166462277",
    companyIds: ["pure-food", "savours"]
  },
  {
    code: "NSCWHO75",
    name: "NSC WHOLESALE HOLDINGS",
    address: "140 Main Street",
    city: "Paterson",
    state: "NJ",
    zip: "07505",
    phone: "9735550185",
    companyIds: ["pure-food"]
  },
  {
    code: "BBY-E",
    name: "Best Buy East DC",
    address: "501 Applewood Crescent",
    city: "Vaughan",
    state: "ON",
    zip: "L4K4J3",
    phone: "9055550144",
    companyIds: ["best-buy"]
  }
];

const carriers = [
  {
    id: "CMBQ",
    code: "CMBQ",
    name: "Canadian Road Runners",
    city: "Toronto",
    state: "ON",
    phone: "9059013123",
    email: "dispatch@canadianroadrunners.ca",
    scac: "CRRQ",
    modes: ["FTL"],
    companyIds: ["pure-food", "savours"]
  },
  {
    id: "CITY",
    code: "CITY",
    name: "City Wide Express",
    city: "Scarborough",
    state: "ON",
    phone: "4163353600",
    email: "sam@citywideexpress.ca",
    scac: "CWEX",
    modes: ["LTL", "FTL"],
    companyIds: ["pure-food", "best-buy"]
  },
  {
    id: "JPX",
    code: "JPX",
    name: "JP Express",
    city: "Mississauga",
    state: "ON",
    phone: "4166798000",
    email: "ops@jpexpress.ca",
    scac: "JPEX",
    modes: ["LTL", "FTL"],
    companyIds: ["pure-food", "best-buy"]
  },
  {
    id: "AESN",
    code: "AESN",
    name: "Aeson Dedicated Fleet",
    city: "Brampton",
    state: "ON",
    phone: "4165550144",
    email: "fleet@aesonretailsolutions.com",
    scac: "AESN",
    modes: ["FTL", "Store Delivery"],
    companyIds: ["wg", "pure-food"]
  },
  {
    id: "AESD",
    code: "AESD",
    name: "Aeson Drayage",
    city: "Brampton",
    state: "ON",
    phone: "4165550166",
    email: "dray@aesonretailsolutions.com",
    scac: "AESD",
    modes: ["Drayage"],
    companyIds: ["pure-food"]
  }
];

const drivers = [
  {
    id: "DRV-CITY-01",
    name: "Marcus Hill",
    carrierId: "CITY",
    phone: "4165550101",
    platform: "iPhone 14",
    deviceStatus: "Online",
    companyIds: ["pure-food"],
    defaultTruck: "Truck 1"
  },
  {
    id: "DRV-CITY-02",
    name: "Nina Alvarez",
    carrierId: "CITY",
    phone: "4165550102",
    platform: "Android",
    deviceStatus: "Online",
    companyIds: ["best-buy"],
    defaultTruck: "Truck 3"
  },
  {
    id: "DRV-JPX-01",
    name: "Peter Choi",
    carrierId: "JPX",
    phone: "4165550103",
    platform: "Android",
    deviceStatus: "Offline cache ready",
    companyIds: ["pure-food", "best-buy"],
    defaultTruck: "Truck 4"
  },
  {
    id: "DRV-AESN-01",
    name: "Sofia Reed",
    carrierId: "AESN",
    phone: "4165550104",
    platform: "iPhone 15",
    deviceStatus: "Online",
    companyIds: ["wg"],
    defaultTruck: "Truck 2"
  }
];

const shipmentStatuses = [
  "DRAFT",
  "READY FOR BOL",
  "BOL CREATED",
  "ASSIGNED",
  "DISPATCHED",
  "IN ROUTE",
  "DELIVERED",
  "EXCEPTION"
];

const shipments = [
  {
    id: "SHP-1058084",
    companyId: "pure-food",
    batchId: "1058084",
    customerNumber: "WG",
    customerPo: "1253062",
    orderNumber: "1253062",
    startDate: "2026-04-06",
    cancelDate: "",
    salesPerson: "Prathab K",
    routeDate: "2026-04-07",
    shippedDate: "",
    status: "DISPATCHED",
    truck: "Truck 1",
    units: "2",
    cartons: "10",
    pallets: "2",
    weight: "680",
    height: "72",
    freightClass: "85",
    cube: "8",
    comments: "Retail fixture lane ready for print.",
    checkOrCash: "",
    cod: "$0.00",
    routedDate: "2026-04-06",
    authorization: "Routing Desk Approved",
    approvedBy: "Dispatch Office",
    deliveryDate: "2026-04-07",
    deliveryStart: "08:00",
    deliveryEnd: "12:00",
    approval: "BOL CREATED",
    scac: "CWEX",
    emailSubject: "",
    rfqSubject: "",
    dept: "Store Delivery",
    carrierId: "CITY",
    carrierName: "City Wide Express",
    driverId: "DRV-CITY-01",
    driverName: "Marcus Hill",
    routeLabel: "RUN-PFE-0407-A",
    routeStatus: "ACCEPTED",
    mobilePublishedAt: "2026-04-06T13:12:00",
    lastDriverSync: "2026-04-06T13:25:00",
    commodity: "Houseware",
    shipFrom: "Pure Food By Estee",
    shipFromAddress: "1330 Courtney Park Drive East, Mississauga, ON",
    shipTo: "WG Pro-Manufacturing Inc",
    shipToAddress: "10 Auction Ln, Brampton, ON L6T5V8",
    customerCode: "WG",
    bolNumber: "BOL-260406-184"
  },
  {
    id: "SHP-1058122",
    companyId: "pure-food",
    batchId: "1058122",
    customerNumber: "SAVOURS",
    customerPo: "1253099",
    orderNumber: "1253099",
    startDate: "2026-04-06",
    cancelDate: "",
    salesPerson: "Dispatch West",
    routeDate: "2026-04-07",
    shippedDate: "",
    status: "DISPATCHED",
    truck: "Truck 1",
    units: "4",
    cartons: "16",
    pallets: "4",
    weight: "1420",
    height: "70",
    freightClass: "70",
    cube: "12",
    comments: "Second stop for the same Toronto run.",
    checkOrCash: "",
    cod: "$0.00",
    routedDate: "2026-04-06",
    authorization: "Routing Desk Approved",
    approvedBy: "Dispatch Office",
    deliveryDate: "2026-04-07",
    deliveryStart: "13:00",
    deliveryEnd: "16:00",
    approval: "BOL CREATED",
    scac: "CWEX",
    emailSubject: "",
    rfqSubject: "",
    dept: "Store Delivery",
    carrierId: "CITY",
    carrierName: "City Wide Express",
    driverId: "DRV-CITY-01",
    driverName: "Marcus Hill",
    routeLabel: "RUN-PFE-0407-A",
    routeStatus: "ACCEPTED",
    mobilePublishedAt: "2026-04-06T13:12:00",
    lastDriverSync: "2026-04-06T13:25:00",
    commodity: "Display Racks",
    shipFrom: "Pure Food By Estee",
    shipFromAddress: "1330 Courtney Park Drive East, Mississauga, ON",
    shipTo: "SAVOURS FRESH MARKET",
    shipToAddress: "3011 Bathurst St, Toronto, ON M6B3B5",
    customerCode: "SAVOURS",
    bolNumber: "BOL-260406-185"
  },
  {
    id: "SHP-1058144",
    companyId: "pure-food",
    batchId: "1058144",
    customerNumber: "UNFICON",
    customerPo: "1253112",
    orderNumber: "1253112",
    startDate: "2026-04-06",
    cancelDate: "",
    salesPerson: "Dispatch West",
    routeDate: "2026-04-08",
    shippedDate: "",
    status: "READY FOR BOL",
    truck: "",
    units: "3",
    cartons: "8",
    pallets: "2",
    weight: "540",
    height: "64",
    freightClass: "77.5",
    cube: "6",
    comments: "Awaiting carrier assignment before BOL release.",
    checkOrCash: "",
    cod: "$0.00",
    routedDate: "",
    authorization: "",
    approvedBy: "",
    deliveryDate: "2026-04-08",
    deliveryStart: "09:00",
    deliveryEnd: "13:00",
    approval: "Pending",
    scac: "",
    emailSubject: "",
    rfqSubject: "",
    dept: "Distribution",
    carrierId: "",
    carrierName: "",
    driverId: "",
    driverName: "",
    routeLabel: "",
    routeStatus: "DRAFT",
    mobilePublishedAt: "",
    lastDriverSync: "",
    commodity: "Floor Displays",
    shipFrom: "Pure Food By Estee",
    shipFromAddress: "1330 Courtney Park Drive East, Mississauga, ON",
    shipTo: "UNIFI CANADA",
    shipToAddress: "8755 Keele Street, Concord, ON L4K2N1",
    customerCode: "UNFICON",
    bolNumber: ""
  },
  {
    id: "SHP-2099102",
    companyId: "best-buy",
    batchId: "2099102",
    customerNumber: "BBY-E",
    customerPo: "BB-88014",
    orderNumber: "88014",
    startDate: "2026-04-06",
    cancelDate: "",
    salesPerson: "Eastern Ops",
    routeDate: "2026-04-08",
    shippedDate: "",
    status: "READY FOR BOL",
    truck: "",
    units: "5",
    cartons: "18",
    pallets: "5",
    weight: "1460",
    height: "76",
    freightClass: "92.5",
    cube: "16",
    comments: "Need carrier assignment before BOL release.",
    checkOrCash: "",
    cod: "$0.00",
    routedDate: "",
    authorization: "",
    approvedBy: "",
    deliveryDate: "2026-04-09",
    deliveryStart: "10:00",
    deliveryEnd: "15:00",
    approval: "Pending",
    scac: "",
    emailSubject: "",
    rfqSubject: "",
    dept: "DC Bypass",
    carrierId: "",
    carrierName: "",
    driverId: "",
    driverName: "",
    routeLabel: "",
    routeStatus: "DRAFT",
    mobilePublishedAt: "",
    lastDriverSync: "",
    commodity: "Electronics Fixtures",
    shipFrom: "Best Buy Canada East",
    shipFromAddress: "8800 Glenlyon Parkway, Burnaby, BC",
    shipTo: "Best Buy East DC",
    shipToAddress: "501 Applewood Crescent, Vaughan, ON L4K4J3",
    customerCode: "BBY-E",
    bolNumber: ""
  },
  {
    id: "SHP-3100441",
    companyId: "wg",
    batchId: "3100441",
    customerNumber: "WG",
    customerPo: "WG-77811",
    orderNumber: "77811",
    startDate: "2026-04-07",
    cancelDate: "",
    salesPerson: "Central Retail",
    routeDate: "2026-04-09",
    shippedDate: "",
    status: "ASSIGNED",
    truck: "Truck 2",
    units: "3",
    cartons: "10",
    pallets: "3",
    weight: "640",
    height: "68",
    freightClass: "85",
    cube: "10",
    comments: "Carrier confirmed for morning delivery.",
    checkOrCash: "",
    cod: "$0.00",
    routedDate: "2026-04-07",
    authorization: "Routing Desk Approved",
    approvedBy: "Dispatch Office",
    deliveryDate: "2026-04-10",
    deliveryStart: "07:30",
    deliveryEnd: "11:00",
    approval: "BOL CREATED",
    scac: "AESN",
    emailSubject: "",
    rfqSubject: "",
    dept: "Dedicated Fleet",
    carrierId: "AESN",
    carrierName: "Aeson Dedicated Fleet",
    driverId: "DRV-AESN-01",
    driverName: "Sofia Reed",
    routeLabel: "RUN-WGP-0409-B",
    routeStatus: "READY TO DISPATCH",
    mobilePublishedAt: "",
    lastDriverSync: "",
    commodity: "Store Shelving",
    shipFrom: "WG Pro-Manufacturing Inc",
    shipFromAddress: "10 Auction Ln, Brampton, ON",
    shipTo: "Aeson Retail DC - Atlanta",
    shipToAddress: "7500 Riverside Pkwy, Lithia Springs, GA",
    customerCode: "WG",
    bolNumber: "BOL-260406-186"
  }
];

const refs = {
  form: document.querySelector("#shipment-form"),
  companyGrid: document.querySelector("#company-grid"),
  selectedShipmentTable: document.querySelector("#selected-shipment-table"),
  customerBody: document.querySelector("#customer-body"),
  carrierBody: document.querySelector("#carrier-body"),
  queueBody: document.querySelector("#queue-body"),
  routeStopsBody: document.querySelector("#route-stops-body"),
  queueSearch: document.querySelector("#queue-search"),
  queueCount: document.querySelector("#queue-count"),
  selectedCompanyLabel: document.querySelector("#selected-company-label"),
  batchSearch: document.querySelector("#batch-search"),
  todayLabel: document.querySelector("#today-label"),
  bolNumberNode: document.querySelector("#bol-number"),
  emailButton: document.querySelector("#send-email"),
  carrierSelect: document.querySelector("#carrier-select"),
  driverSelect: document.querySelector("#driver-select"),
  routeTruckInput: document.querySelector("#route-truck-input"),
  routeLabelInput: document.querySelector("#route-label-input"),
  customerCount: document.querySelector("#customer-count"),
  carrierCount: document.querySelector("#carrier-count"),
  selectedCarrierSummary: document.querySelector("#selected-carrier-summary"),
  emailCarrierButton: document.querySelector("#email-carrier"),
  tenantStats: document.querySelector("#tenant-stats"),
  tenantModePill: document.querySelector("#tenant-mode-pill"),
  tenantIsolationNote: document.querySelector("#tenant-isolation-note"),
  dispatchChecklist: document.querySelector("#dispatch-checklist"),
  mobileStatusChip: document.querySelector("#mobile-status-chip"),
  mobileStopList: document.querySelector("#mobile-stop-list"),
  syncLog: document.querySelector("#sync-log"),
  publishRouteButton: document.querySelector("#publish-route"),
  simulateAcceptButton: document.querySelector("#simulate-accept"),
  simulateDeliveryButton: document.querySelector("#simulate-delivery")
};

const state = {
  selectedCompanyId: companies[0].id,
  selectedShipmentId: "SHP-1058084",
  bolSequence: 186,
  syncLog: [
    {
      companyId: "pure-food",
      timestamp: "2026-04-06T13:12:00",
      title: "Route RUN-PFE-0407-A pushed to Marcus Hill",
      detail: "2 stops published to the City Wide Express driver app."
    },
    {
      companyId: "pure-food",
      timestamp: "2026-04-06T13:25:00",
      title: "Marcus Hill accepted the route",
      detail: "Driver confirmed Truck 1 and started route preparation."
    }
  ]
};

function formatDateLabel(value) {
  if (!value) return "Not scheduled";
  return new Date(`${value}T09:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function formatDateTimeLabel(value) {
  if (!value) return "No sync yet";
  return new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function formatToday() {
  return new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("en-US");
}

function buildCustomerAddress(customer) {
  return [customer.address, `${customer.city}, ${customer.state} ${customer.zip}`]
    .filter(Boolean)
    .join(", ");
}

function buildEmailSubject(shipment) {
  return `${shipment.customerNumber || "Customer"} PO ${shipment.customerPo || "PO"} SO ${shipment.orderNumber || "SO"}`;
}

function buildRfqSubject(shipment) {
  return `RFQ ${shipment.customerNumber || "Customer"} SO ${shipment.orderNumber || "SO"}`;
}

function buildRouteLabel(shipment) {
  const company = companies.find((item) => item.id === shipment.companyId) || companies[0];
  const routeChunk = (shipment.routeDate || new Date().toISOString().slice(0, 10)).slice(5).replace("-", "");
  const truckChunk = (shipment.truck || "TRUCK1").replace(/\s+/g, "").toUpperCase();
  return `RUN-${company.code}-${routeChunk}-${truckChunk}`;
}

function getSelectedCompany() {
  return companies.find((company) => company.id === state.selectedCompanyId) || companies[0];
}

function getSelectedShipment() {
  return shipments.find((shipment) => shipment.id === state.selectedShipmentId) || null;
}

function getCustomerByCode(code) {
  const normalized = String(code || "").trim().toLowerCase();
  return customers.find((customer) => customer.code.toLowerCase() === normalized) || null;
}

function getCarrierById(carrierId) {
  return carriers.find((carrier) => carrier.id === carrierId) || null;
}

function getDriverById(driverId) {
  return drivers.find((driver) => driver.id === driverId) || null;
}

function getCompanyShipments() {
  return shipments.filter((shipment) => shipment.companyId === state.selectedCompanyId);
}

function getCompanyCustomers() {
  return customers.filter((customer) => customer.companyIds.includes(state.selectedCompanyId));
}

function getCompanyCarriers() {
  return carriers.filter((carrier) => carrier.companyIds.includes(state.selectedCompanyId));
}

function getCompanyDrivers() {
  return drivers.filter((driver) => driver.companyIds.includes(state.selectedCompanyId));
}

function getFilteredShipments() {
  const query = refs.queueSearch.value.trim().toLowerCase();
  const companyShipments = getCompanyShipments();

  if (!query) return companyShipments;

  return companyShipments.filter((shipment) =>
    [
      shipment.batchId,
      shipment.customerNumber,
      shipment.customerPo,
      shipment.orderNumber,
      shipment.status,
      shipment.routeStatus,
      shipment.carrierName,
      shipment.driverName,
      shipment.routeLabel,
      shipment.truck
    ]
      .join(" ")
      .toLowerCase()
      .includes(query)
  );
}

function getRunShipments(baseShipment = getSelectedShipment()) {
  if (!baseShipment) return [];

  const companyShipments = getCompanyShipments();

  if (baseShipment.routeLabel) {
    return companyShipments.filter((shipment) => shipment.routeLabel === baseShipment.routeLabel);
  }

  if (baseShipment.carrierId && baseShipment.routeDate && baseShipment.truck) {
    return companyShipments.filter(
      (shipment) =>
        shipment.carrierId === baseShipment.carrierId &&
        shipment.routeDate === baseShipment.routeDate &&
        (shipment.truck || "") === (baseShipment.truck || "") &&
        (baseShipment.driverId ? shipment.driverId === baseShipment.driverId : true)
    );
  }

  return [baseShipment];
}

function getCompanySyncLog() {
  return state.syncLog
    .filter((entry) => entry.companyId === state.selectedCompanyId)
    .sort((left, right) => new Date(right.timestamp) - new Date(left.timestamp))
    .slice(0, 6);
}

function addSyncEvent(title, detail) {
  state.syncLog.unshift({
    companyId: state.selectedCompanyId,
    timestamp: new Date().toISOString(),
    title,
    detail
  });
}

function applyCustomerLookup(shipment, force) {
  const customer = getCustomerByCode(shipment.customerNumber);
  if (!customer) return;
  shipment.customerCode = customer.code;
  if (force || !shipment.shipTo) shipment.shipTo = customer.name;
  if (force || !shipment.shipToAddress) shipment.shipToAddress = buildCustomerAddress(customer);
}

function applyCarrierLookup(shipment, carrierId, truckValue) {
  const carrier = getCompanyCarriers().find((item) => item.id === carrierId) || getCarrierById(carrierId);
  if (!carrier) return;

  shipment.carrierId = carrier.id;
  shipment.carrierName = carrier.name;
  shipment.scac = carrier.scac;
  shipment.truck = truckValue || shipment.truck || "Truck 1";

  if (shipment.status === "DRAFT" || shipment.status === "READY FOR BOL" || shipment.status === "BOL CREATED") {
    shipment.status = "ASSIGNED";
  }
}

function applyDriverLookup(shipment, driverId) {
  const driver = getCompanyDrivers().find((item) => item.id === driverId) || getDriverById(driverId);
  if (!driver) return;

  shipment.driverId = driver.id;
  shipment.driverName = driver.name;

  if (!shipment.carrierId || shipment.carrierId !== driver.carrierId) {
    applyCarrierLookup(shipment, driver.carrierId, shipment.truck || driver.defaultTruck);
  }

  if (!shipment.truck) shipment.truck = driver.defaultTruck;

  if (!shipment.routeLabel && shipment.routeDate) {
    shipment.routeLabel = buildRouteLabel(shipment);
  }

  if (shipment.status === "ASSIGNED" || shipment.status === "BOL CREATED") {
    shipment.routeStatus = "READY TO DISPATCH";
  }
}

function normalizeShipment(shipment) {
  applyCustomerLookup(shipment, false);

  if (shipment.carrierId) {
    applyCarrierLookup(shipment, shipment.carrierId, shipment.truck);
  }

  if (shipment.driverId) {
    applyDriverLookup(shipment, shipment.driverId);
  }

  shipment.emailSubject = buildEmailSubject(shipment);
  shipment.rfqSubject = buildRfqSubject(shipment);

  if (!shipment.routeStatus) {
    if (shipment.status === "DELIVERED") shipment.routeStatus = "COMPLETED";
    else if (shipment.status === "IN ROUTE") shipment.routeStatus = "IN PROGRESS";
    else if (shipment.status === "DISPATCHED") shipment.routeStatus = "DISPATCHED";
    else if (shipment.status === "ASSIGNED") shipment.routeStatus = "READY TO DISPATCH";
    else shipment.routeStatus = "DRAFT";
  }
}

shipments.forEach(normalizeShipment);

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function setFormValue(name, value) {
  const field = refs.form.elements.namedItem(name);
  if (field && "value" in field) field.value = value || "";
}

function syncDerivedFormFields(shipment) {
  setFormValue("customerCode", shipment.customerCode);
  setFormValue("shipTo", shipment.shipTo);
  setFormValue("carrierName", shipment.carrierName);
  setFormValue("scac", shipment.scac);
  setFormValue("truck", shipment.truck);
  setFormValue("emailSubject", shipment.emailSubject);
  setFormValue("rfqSubject", shipment.rfqSubject);
}

function saveFormToShipment() {
  const shipment = getSelectedShipment();
  if (!shipment) return;

  Object.assign(shipment, Object.fromEntries(new FormData(refs.form).entries()));
  normalizeShipment(shipment);
  syncDerivedFormFields(shipment);
}

function updateHeaderMeta() {
  const company = getSelectedCompany();
  refs.todayLabel.textContent = formatToday();
  refs.selectedCompanyLabel.textContent = company.name;
  refs.tenantModePill.textContent = `Tenant: ${company.name}`;
  refs.tenantIsolationNote.textContent = `${company.name} data is isolated from every other signed-up company.`;
}

function renderCompanies() {
  refs.companyGrid.innerHTML = companies
    .map(
      (company) => `
        <button class="company-card ${company.id === state.selectedCompanyId ? "active" : ""}" type="button" data-company-id="${company.id}">
          <strong>${company.name}</strong>
          <span>${company.detail}</span>
        </button>
      `
    )
    .join("");
}

function renderTenantStats() {
  const stats = [
    { label: "Shipments", value: getCompanyShipments().length },
    { label: "Customers", value: getCompanyCustomers().length },
    { label: "Carriers", value: getCompanyCarriers().length },
    { label: "Drivers", value: getCompanyDrivers().length }
  ];

  refs.tenantStats.innerHTML = stats
    .map(
      (item) => `
        <article class="tenant-stat-card">
          <span class="mini-label">${item.label}</span>
          <strong>${formatNumber(item.value)}</strong>
        </article>
      `
    )
    .join("");
}

function renderSelectedShipmentRow() {
  const shipment = getSelectedShipment();
  refs.selectedShipmentTable.innerHTML = shipment
    ? `
      <tr class="queue-row-selected">
        <td>${shipment.batchId}</td>
        <td>${shipment.customerNumber}</td>
        <td>${shipment.customerPo}</td>
        <td>${shipment.orderNumber}</td>
        <td>${formatDateLabel(shipment.routeDate)}</td>
        <td>${shipment.status}</td>
      </tr>
    `
    : `<tr><td colspan="6">No batch found for this company.</td></tr>`;
}

function renderCustomers() {
  const shipment = getSelectedShipment();
  const companyCustomers = getCompanyCustomers();

  refs.customerCount.textContent = `${companyCustomers.length} customers`;
  refs.customerBody.innerHTML = companyCustomers
    .map(
      (customer) => `
        <tr class="${shipment?.customerNumber === customer.code ? "directory-row-active" : ""}">
          <td>${customer.code}</td>
          <td>${customer.name}</td>
          <td>${customer.address}</td>
          <td>${customer.city}</td>
          <td>${customer.state}</td>
          <td>${customer.zip}</td>
          <td>${customer.phone}</td>
          <td><button class="button button-secondary table-action" type="button" data-customer-code="${customer.code}">Use Customer</button></td>
        </tr>
      `
    )
    .join("");
}

function renderCarrierOptions() {
  const shipment = getSelectedShipment();
  const companyCarriers = getCompanyCarriers();

  refs.carrierSelect.innerHTML = `
    <option value="">Choose carrier</option>
    ${companyCarriers
      .map(
        (carrier) => `
          <option value="${carrier.id}" ${shipment?.carrierId === carrier.id ? "selected" : ""}>
            ${carrier.name}
          </option>
        `
      )
      .join("")}
  `;
}

function renderDriverOptions() {
  const shipment = getSelectedShipment();
  const selectedCarrierId = refs.carrierSelect.value || shipment?.carrierId || "";
  const companyDrivers = getCompanyDrivers().filter((driver) =>
    selectedCarrierId ? driver.carrierId === selectedCarrierId : true
  );

  refs.driverSelect.innerHTML = `
    <option value="">Choose driver</option>
    ${companyDrivers
      .map(
        (driver) => `
          <option value="${driver.id}" ${shipment?.driverId === driver.id ? "selected" : ""}>
            ${driver.name}
          </option>
        `
      )
      .join("")}
  `;
}

function renderCarrierSummary() {
  const shipment = getSelectedShipment();

  refs.selectedCarrierSummary.textContent = shipment
    ? `Batch ${shipment.batchId} | ${shipment.customerNumber} | ${shipment.carrierName || "Awaiting carrier"} | ${shipment.driverName || "Awaiting driver"}`
    : "No shipment selected";

  refs.routeTruckInput.value = shipment?.truck || "";
  refs.routeLabelInput.value = shipment?.routeLabel || "";
}

function renderDispatchChecklist() {
  const shipment = getSelectedShipment();
  if (!shipment) {
    refs.dispatchChecklist.innerHTML = "";
    return;
  }

  const checks = [
    { label: "Tenant scoped", complete: shipment.companyId === state.selectedCompanyId },
    { label: "Customer matched", complete: Boolean(getCustomerByCode(shipment.customerNumber)) },
    {
      label: "BOL ready",
      complete: Boolean(
        shipment.bolNumber ||
          shipment.status === "BOL CREATED" ||
          shipment.status === "ASSIGNED" ||
          shipment.status === "DISPATCHED" ||
          shipment.status === "IN ROUTE" ||
          shipment.status === "DELIVERED"
      )
    },
    { label: "Carrier assigned", complete: Boolean(shipment.carrierId) },
    { label: "Driver assigned", complete: Boolean(shipment.driverId) },
    { label: "Route published", complete: Boolean(shipment.mobilePublishedAt) }
  ];

  refs.dispatchChecklist.innerHTML = checks
    .map(
      (check) => `
        <span class="check-pill ${check.complete ? "is-complete" : ""}">
          ${check.label}
        </span>
      `
    )
    .join("");
}

function renderCarriers() {
  const shipment = getSelectedShipment();
  const companyCarriers = getCompanyCarriers();

  refs.carrierCount.textContent = `${companyCarriers.length} carriers`;
  refs.carrierBody.innerHTML = companyCarriers
    .map(
      (carrier) => `
        <tr class="${shipment?.carrierId === carrier.id ? "directory-row-active" : ""}">
          <td>${carrier.code}</td>
          <td>${carrier.name}</td>
          <td>${carrier.city}</td>
          <td>${carrier.state}</td>
          <td>${carrier.phone}</td>
          <td>${carrier.email}</td>
          <td>${carrier.modes.join(" / ")}</td>
          <td><button class="button button-secondary table-action" type="button" data-carrier-id="${carrier.id}">Assign</button></td>
        </tr>
      `
    )
    .join("");
}

function renderQueue() {
  const filteredShipments = getFilteredShipments();

  refs.queueCount.textContent = `${filteredShipments.length} record${filteredShipments.length === 1 ? "" : "s"}`;
  refs.queueBody.innerHTML = filteredShipments
    .map(
      (shipment) => `
        <tr class="${shipment.id === state.selectedShipmentId ? "queue-row-selected" : ""}">
          <td><button class="queue-link" type="button" data-select-id="${shipment.id}">${shipment.batchId}</button></td>
          <td>${shipment.customerNumber}</td>
          <td>${shipment.customerPo}</td>
          <td>${shipment.orderNumber}</td>
          <td>${formatDateLabel(shipment.routeDate)}</td>
          <td>${shipment.carrierName || "Unassigned"}</td>
          <td>${shipment.truck || "TBD"}</td>
          <td>
            <select class="status-select" data-status-id="${shipment.id}">
              ${shipmentStatuses
                .map(
                  (status) => `<option value="${status}" ${shipment.status === status ? "selected" : ""}>${status}</option>`
                )
                .join("")}
            </select>
          </td>
        </tr>
      `
    )
    .join("");
}

function loadShipmentIntoForm() {
  const shipment = getSelectedShipment();
  if (!shipment) return;

  Object.entries(shipment).forEach(([key, value]) => {
    const field = refs.form.elements.namedItem(key);
    if (field && "value" in field) field.value = value;
  });

  syncDerivedFormFields(shipment);
  refs.batchSearch.value = shipment.batchId;
}

function syncPreview() {
  const shipment = getSelectedShipment();
  if (!shipment) return;

  setText("#preview-date", formatToday());
  setText("#preview-bol-number", shipment.bolNumber || "Pending BOL");
  setText("#preview-ship-from", shipment.shipFrom || "Pending ship from");
  setText("#preview-ship-from-address", shipment.shipFromAddress || "Pending address");
  setText("#preview-ship-to", shipment.shipTo || "Pending ship to");
  setText("#preview-ship-to-address", shipment.shipToAddress || "Pending address");
  setText("#preview-carrier", shipment.carrierName || "Pending carrier");
  setText("#preview-scac", shipment.scac || "Pending");
  setText("#preview-customer-code", shipment.customerCode || "Pending");
  setText("#preview-customer-number", shipment.customerNumber || "Pending");
  setText("#preview-order-number", shipment.orderNumber || "Pending");
  setText("#preview-pallets", formatNumber(shipment.pallets));
  setText("#preview-weight", formatNumber(shipment.weight));
  setText("#preview-commodity", shipment.commodity || "Pending commodity");
  setText("#preview-class", shipment.freightClass || "Pending");
  setText("#preview-customer-po", shipment.customerPo || "Pending");
  setText("#preview-route-date", formatDateLabel(shipment.routeDate));
  setText(
    "#preview-delivery-window",
    `${formatDateLabel(shipment.deliveryDate)} | ${shipment.deliveryStart || "--:--"} - ${shipment.deliveryEnd || "--:--"}`
  );
  setText("#preview-comments", shipment.comments || "No dispatch comments added.");
  setText("#preview-email-subject", shipment.emailSubject || "Pending");
  setText("#preview-rfq-subject", shipment.rfqSubject || "Pending");
  setText("#preview-dept", shipment.dept || "Pending");
  setText("#preview-approved-by", shipment.approvedBy || "Pending");
  refs.bolNumberNode.textContent = shipment.bolNumber || "Pending BOL";
}

function renderRouteSheet() {
  const shipment = getSelectedShipment();
  if (!shipment) return;

  const routeShipments = getRunShipments(shipment);
  const carrier = getCarrierById(shipment.carrierId);
  const totalPallets = routeShipments.reduce((sum, item) => sum + Number(item.pallets || 0), 0);
  const fileName = shipment.routeLabel
    ? `${shipment.routeLabel} | ${carrier?.name || "Unassigned"} | ${totalPallets} PALLETS | ${routeShipments.length} STOPS`
    : `${(carrier?.name || "UNASSIGNED").toUpperCase()} ${totalPallets} PALLETS ${routeShipments.length} STOPS`;

  setText("#route-file-name", fileName);
  setText("#route-run-date", formatDateLabel(shipment.routeDate));
  setText("#route-carrier", shipment.carrierName || "Awaiting carrier assignment");
  setText("#route-truck", shipment.truck || "TBD");
  setText("#route-driver", shipment.driverName || "Awaiting driver assignment");
  setText("#route-status", shipment.routeStatus || "DRAFT");
  setText("#route-pallets", formatNumber(totalPallets));
  setText("#route-stops", String(routeShipments.length));

  refs.routeStopsBody.innerHTML = routeShipments
    .map((item, index) => {
      const customer = getCustomerByCode(item.customerNumber);
      const cityLine = customer ? `${customer.city}, ${customer.state}` : "Pending city";
      const address = customer ? customer.address : item.shipToAddress || "Pending address";
      const phone = customer?.phone || "N/A";
      const windowLabel = `${formatDateLabel(item.deliveryDate)} | ${item.deliveryStart || "--:--"} - ${item.deliveryEnd || "--:--"}`;

      return `
        <tr>
          <td>${index + 1}</td>
          <td>${item.batchId}</td>
          <td>${item.customerPo}</td>
          <td>${item.shipTo || item.customerNumber}</td>
          <td>${address}</td>
          <td>${cityLine}</td>
          <td>${phone}</td>
          <td>${formatNumber(item.pallets)}</td>
          <td>${formatNumber(item.cartons)}</td>
          <td>${windowLabel}</td>
        </tr>
      `;
    })
    .join("");
}

function renderMobileScreen() {
  const shipment = getSelectedShipment();
  if (!shipment) return;

  const routeShipments = getRunShipments(shipment);
  const driver = getDriverById(shipment.driverId);
  const totalPallets = routeShipments.reduce((sum, item) => sum + Number(item.pallets || 0), 0);
  const routeStatus = shipment.routeStatus || "DRAFT";
  const isPublished = Boolean(shipment.mobilePublishedAt);

  refs.mobileStatusChip.textContent = routeStatus;
  setText("#mobile-driver-name", driver ? driver.name : "Assign a driver");
  setText(
    "#mobile-route-label",
    shipment.routeLabel
      ? `${shipment.routeLabel} | ${formatDateLabel(shipment.routeDate)}`
      : "Publish a route to populate the mobile inbox."
  );
  setText("#mobile-stop-count", String(routeShipments.length));
  setText("#mobile-pallet-count", formatNumber(totalPallets));
  setText("#mobile-truck", shipment.truck || "TBD");
  setText("#mobile-route-status", routeStatus);
  setText("#dispatch-state", isPublished ? "Route published to driver" : "Ready to assign");
  setText(
    "#dispatch-message",
    isPublished
      ? `${routeShipments.length} stop${routeShipments.length === 1 ? "" : "s"} are available in the driver inbox and can sync back POD updates.`
      : "Assign a carrier and driver, then publish the route so the driver app receives stop data and timing."
  );
  setText("#mobile-device", driver ? `${driver.platform} | ${driver.deviceStatus}` : "Not assigned");
  setText("#mobile-last-sync", shipment.lastDriverSync ? formatDateTimeLabel(shipment.lastDriverSync) : "No sync yet");

  refs.mobileStopList.innerHTML = routeShipments.length
    ? routeShipments
        .map(
          (item, index) => `
            <article class="mobile-stop-card">
              <span class="mini-label">Stop ${index + 1}</span>
              <strong>${item.shipTo || item.customerNumber}</strong>
              <p>${item.shipToAddress || "Pending address"}</p>
              <div class="mobile-stop-meta">
                <span>${item.status}</span>
                <span>${formatDateLabel(item.deliveryDate)}</span>
                <span>${item.deliveryStart || "--:--"} - ${item.deliveryEnd || "--:--"}</span>
              </div>
            </article>
          `
        )
        .join("")
    : `
      <article class="mobile-stop-card">
        <strong>No route yet</strong>
        <p>Assign a driver and publish a run to see stops appear here.</p>
      </article>
    `;

  refs.syncLog.innerHTML = getCompanySyncLog()
    .map(
      (entry) => `
        <article class="sync-log-item">
          <strong>${entry.title}</strong>
          <p>${entry.detail}</p>
          <span class="mini-label">${formatDateTimeLabel(entry.timestamp)}</span>
        </article>
      `
    )
    .join("");

  refs.simulateAcceptButton.disabled = !driver || !isPublished;
  refs.simulateDeliveryButton.disabled = !driver || !isPublished;
}

function refreshWorkspace() {
  updateHeaderMeta();
  renderTenantStats();
  renderCompanies();
  renderSelectedShipmentRow();
  renderCustomers();
  renderCarrierOptions();
  renderDriverOptions();
  renderCarrierSummary();
  renderDispatchChecklist();
  renderCarriers();
  renderQueue();
  loadShipmentIntoForm();
  syncPreview();
  renderRouteSheet();
  renderMobileScreen();
}

function refreshDerivedViews() {
  renderTenantStats();
  renderSelectedShipmentRow();
  renderCustomers();
  renderCarrierOptions();
  renderDriverOptions();
  renderCarrierSummary();
  renderDispatchChecklist();
  renderCarriers();
  renderQueue();
  syncPreview();
  renderRouteSheet();
  renderMobileScreen();
}

function selectCompany(companyId) {
  state.selectedCompanyId = companyId;
  state.selectedShipmentId = getCompanyShipments()[0]?.id || "";
  refs.queueSearch.value = "";
  refreshWorkspace();
}

function selectShipment(shipmentId) {
  state.selectedShipmentId = shipmentId;
  refreshWorkspace();
}

function findShipmentByBatch(batchId) {
  const normalized = String(batchId || "").trim().toLowerCase();
  return getCompanyShipments().find((shipment) => shipment.batchId.toLowerCase() === normalized) || null;
}

function showData() {
  const foundShipment = findShipmentByBatch(refs.batchSearch.value);

  if (foundShipment) state.selectedShipmentId = foundShipment.id;
  else if (getCompanyShipments()[0]) state.selectedShipmentId = getCompanyShipments()[0].id;

  refreshWorkspace();
  document.querySelector("#packing-screen").scrollIntoView({ behavior: "smooth", block: "start" });
}

function saveShipment() {
  saveFormToShipment();
  refreshDerivedViews();
}

function createBolNumber() {
  state.bolSequence += 1;
  const now = new Date();
  const year = String(now.getFullYear()).slice(-2);
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `BOL-${year}${month}${day}-${String(state.bolSequence).padStart(3, "0")}`;
}

function generateBol() {
  saveFormToShipment();
  const shipment = getSelectedShipment();
  if (!shipment) return;

  shipment.status = "BOL CREATED";
  shipment.bolNumber = shipment.bolNumber || createBolNumber();
  shipment.routeStatus = shipment.routeStatus === "DRAFT" ? "READY TO DISPATCH" : shipment.routeStatus;
  refreshWorkspace();
  document.querySelector("#preview-screen").scrollIntoView({ behavior: "smooth", block: "start" });
}

function saveAssignment(carrierIdOverride) {
  const shipment = getSelectedShipment();
  if (!shipment) return;

  const carrierId = carrierIdOverride || refs.carrierSelect.value;
  const driverId = refs.driverSelect.value;
  const truck = refs.routeTruckInput.value.trim() || shipment.truck || "Truck 1";

  if (carrierId) applyCarrierLookup(shipment, carrierId, truck);
  else shipment.truck = truck;

  if (driverId) applyDriverLookup(shipment, driverId);
  else {
    shipment.driverId = "";
    shipment.driverName = "";
  }

  shipment.routeLabel = refs.routeLabelInput.value.trim() || shipment.routeLabel || buildRouteLabel(shipment);
  shipment.routeStatus = shipment.driverId ? "READY TO DISPATCH" : shipment.routeStatus || "DRAFT";

  syncDerivedFormFields(shipment);
  refreshWorkspace();
  document.querySelector("#route-screen").scrollIntoView({ behavior: "smooth", block: "start" });
}

function publishRouteToDriver() {
  const shipment = getSelectedShipment();
  if (!shipment) return;

  if (!shipment.carrierId) {
    updateButtonState(refs.publishRouteButton, "Assign Carrier");
    return;
  }

  if (!shipment.driverId) {
    updateButtonState(refs.publishRouteButton, "Assign Driver");
    return;
  }

  if (!shipment.routeLabel) {
    shipment.routeLabel = refs.routeLabelInput.value.trim() || buildRouteLabel(shipment);
  }

  const now = new Date().toISOString();
  const runShipments = getCompanyShipments().filter(
    (item) =>
      item.carrierId === shipment.carrierId &&
      item.routeDate === shipment.routeDate &&
      (item.truck || "") === (shipment.truck || "") &&
      item.driverId === shipment.driverId
  );

  runShipments.forEach((item) => {
    item.routeLabel = shipment.routeLabel;
    item.routeStatus = "DISPATCHED";
    item.mobilePublishedAt = now;
    item.lastDriverSync = now;
    if (["ASSIGNED", "BOL CREATED"].includes(item.status)) item.status = "DISPATCHED";
  });

  const driver = getDriverById(shipment.driverId);
  addSyncEvent(
    `Route ${shipment.routeLabel} pushed to ${driver?.name || "driver"}`,
    `${runShipments.length} stop${runShipments.length === 1 ? "" : "s"} published with truck ${shipment.truck || "TBD"}.`
  );

  refreshWorkspace();
  document.querySelector("#mobile-screen").scrollIntoView({ behavior: "smooth", block: "start" });
}

function simulateDriverAccept() {
  const shipment = getSelectedShipment();
  if (!shipment || !shipment.driverId || !shipment.mobilePublishedAt) return;

  const now = new Date().toISOString();
  const runShipments = getRunShipments(shipment);
  runShipments.forEach((item) => {
    item.routeStatus = "ACCEPTED";
    item.lastDriverSync = now;
    if (item.status === "DISPATCHED") item.status = "IN ROUTE";
  });

  addSyncEvent(
    `${shipment.driverName} accepted ${shipment.routeLabel || "the route"}`,
    "Driver confirmed the stop list and route is now visible as active in dispatch."
  );

  refreshWorkspace();
}

function simulateDeliverySync() {
  const shipment = getSelectedShipment();
  if (!shipment || !shipment.driverId || !shipment.mobilePublishedAt) return;

  const now = new Date().toISOString();
  const runShipments = getRunShipments(shipment);
  const pendingStop = runShipments.find((item) => item.status !== "DELIVERED");

  if (!pendingStop) {
    addSyncEvent(
      `${shipment.routeLabel || "Route"} already completed`,
      "All stops are already marked delivered in this prototype route."
    );
    refreshWorkspace();
    return;
  }

  pendingStop.status = "DELIVERED";
  pendingStop.lastDriverSync = now;

  const allDelivered = runShipments.every((item) => item.status === "DELIVERED");
  runShipments.forEach((item) => {
    item.lastDriverSync = now;
    item.routeStatus = allDelivered ? "COMPLETED" : "IN PROGRESS";
  });

  addSyncEvent(
    `Stop ${pendingStop.batchId} synced from mobile`,
    allDelivered
      ? `Driver completed ${shipment.routeLabel || "the route"} and closed all stops.`
      : `Delivery update received for ${pendingStop.shipTo || pendingStop.customerNumber}.`
  );

  refreshWorkspace();
}

function shipAll() {
  const shipment = getSelectedShipment();
  if (!shipment) return;

  const now = new Date().toISOString();
  getRunShipments(shipment).forEach((item) => {
    item.status = "DELIVERED";
    item.shippedDate = now.slice(0, 10);
    item.routeStatus = "COMPLETED";
    item.lastDriverSync = now;
  });

  addSyncEvent(
    `${shipment.routeLabel || "Route"} marked delivered`,
    "Dispatch closed the full run after delivery confirmation."
  );

  refreshWorkspace();
}

function scrollToForm() {
  document.querySelector("#entry-screen").scrollIntoView({ behavior: "smooth", block: "start" });
}

function applyCustomerToSelected(customerCode) {
  const shipment = getSelectedShipment();
  const customer = getCustomerByCode(customerCode);
  if (!shipment || !customer) return;

  shipment.customerNumber = customer.code;
  applyCustomerLookup(shipment, true);
  normalizeShipment(shipment);
  syncDerivedFormFields(shipment);
  refreshWorkspace();
  scrollToForm();
}

function updateButtonState(button, label) {
  const original = button.textContent;
  button.textContent = label;
  window.setTimeout(() => {
    button.textContent = original;
  }, 1600);
}

refs.companyGrid.addEventListener("click", (event) => {
  const target = event.target.closest("[data-company-id]");
  if (target) selectCompany(target.dataset.companyId);
});

refs.customerBody.addEventListener("click", (event) => {
  const target = event.target.closest("[data-customer-code]");
  if (target) applyCustomerToSelected(target.dataset.customerCode);
});

refs.carrierBody.addEventListener("click", (event) => {
  const target = event.target.closest("[data-carrier-id]");
  if (!target) return;
  refs.carrierSelect.value = target.dataset.carrierId;
  renderDriverOptions();
  saveAssignment(target.dataset.carrierId);
});

refs.queueBody.addEventListener("click", (event) => {
  const target = event.target.closest("[data-select-id]");
  if (target) selectShipment(target.dataset.selectId);
});

refs.queueBody.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLSelectElement) || !target.dataset.statusId) return;

  const shipment = shipments.find((item) => item.id === target.dataset.statusId);
  if (!shipment) return;

  shipment.status = target.value;

  if (shipment.status === "DELIVERED") shipment.routeStatus = "COMPLETED";
  if (shipment.status === "IN ROUTE") shipment.routeStatus = "IN PROGRESS";
  if (shipment.status === "DISPATCHED" && !shipment.mobilePublishedAt) shipment.routeStatus = "DISPATCHED";

  if (shipment.id === state.selectedShipmentId) {
    renderSelectedShipmentRow();
    renderDispatchChecklist();
    renderRouteSheet();
    renderMobileScreen();
  }
});

refs.queueSearch.addEventListener("input", renderQueue);
refs.batchSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    showData();
  }
});

refs.form.addEventListener("input", () => {
  saveFormToShipment();
  renderSelectedShipmentRow();
  renderCarrierSummary();
  renderDispatchChecklist();
  renderQueue();
  syncPreview();
  renderRouteSheet();
  renderMobileScreen();
});

refs.form.addEventListener("change", (event) => {
  saveFormToShipment();

  if (event.target instanceof HTMLInputElement && event.target.name === "customerNumber") {
    const shipment = getSelectedShipment();
    if (shipment && getCustomerByCode(shipment.customerNumber)) {
      applyCustomerLookup(shipment, true);
      syncDerivedFormFields(shipment);
    }
  }

  refreshDerivedViews();
});

refs.carrierSelect.addEventListener("change", () => {
  const shipment = getSelectedShipment();
  const selectedCarrierId = refs.carrierSelect.value;
  const selectedDriver = getDriverById(refs.driverSelect.value);

  if (selectedDriver && selectedDriver.carrierId !== selectedCarrierId) {
    refs.driverSelect.value = "";
  }

  renderDriverOptions();

  if (shipment && !refs.routeTruckInput.value.trim()) {
    refs.routeTruckInput.value = shipment.truck || "Truck 1";
  }

  if (shipment && !refs.routeLabelInput.value.trim() && shipment.routeDate) {
    shipment.truck = refs.routeTruckInput.value.trim() || shipment.truck || "Truck 1";
    refs.routeLabelInput.value = shipment.routeLabel || buildRouteLabel(shipment);
  }
});

refs.driverSelect.addEventListener("change", () => {
  const shipment = getSelectedShipment();
  const driver = getDriverById(refs.driverSelect.value);
  if (!shipment || !driver) return;

  if (refs.carrierSelect.value !== driver.carrierId) {
    refs.carrierSelect.value = driver.carrierId;
    renderDriverOptions();
    refs.driverSelect.value = driver.id;
  }

  if (!refs.routeTruckInput.value.trim()) {
    refs.routeTruckInput.value = driver.defaultTruck;
  }

  shipment.truck = refs.routeTruckInput.value.trim() || driver.defaultTruck;
  if (!refs.routeLabelInput.value.trim() && shipment.routeDate) {
    refs.routeLabelInput.value = shipment.routeLabel || buildRouteLabel(shipment);
  }
});

refs.routeTruckInput.addEventListener("input", () => {
  const shipment = getSelectedShipment();
  if (!shipment) return;

  shipment.truck = refs.routeTruckInput.value.trim();
  setFormValue("truck", shipment.truck);

  if (shipment.routeDate && !refs.routeLabelInput.value.trim()) {
    refs.routeLabelInput.value = shipment.routeLabel || buildRouteLabel(shipment);
  }

  renderCarrierSummary();
  renderQueue();
  renderRouteSheet();
  renderMobileScreen();
});

refs.routeLabelInput.addEventListener("input", () => {
  const shipment = getSelectedShipment();
  if (!shipment) return;
  shipment.routeLabel = refs.routeLabelInput.value.trim();
  renderRouteSheet();
  renderMobileScreen();
});

document.querySelector("#show-data").addEventListener("click", showData);
document.querySelector("#show-form").addEventListener("click", scrollToForm);
document.querySelector("#ship-all").addEventListener("click", shipAll);
document.querySelector("#save-shipment").addEventListener("click", saveShipment);
document.querySelector("#generate-bol").addEventListener("click", generateBol);
document.querySelector("#assign-carrier").addEventListener("click", () => saveAssignment());
document.querySelector("#publish-route").addEventListener("click", publishRouteToDriver);
document.querySelector("#simulate-accept").addEventListener("click", simulateDriverAccept);
document.querySelector("#simulate-delivery").addEventListener("click", simulateDeliverySync);
document.querySelector("#login-button").addEventListener("click", () => {
  document.querySelector("#workspace").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#print-form").addEventListener("click", () => window.print());
document.querySelector("#print-route").addEventListener("click", () => window.print());
document.querySelector("#send-email").addEventListener("click", () => {
  updateButtonState(refs.emailButton, document.querySelector("#email-address").value.trim() ? "Sent" : "Add Email");
});
document.querySelector("#email-carrier").addEventListener("click", () => {
  const shipment = getSelectedShipment();
  const carrier = shipment ? getCarrierById(shipment.carrierId) : null;
  updateButtonState(refs.emailCarrierButton, carrier ? `Emailed ${carrier.code}` : "Assign Carrier");
});

refreshWorkspace();
