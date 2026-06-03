sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "otccockpit/model/formatter"
], function (Controller, Filter, FilterOperator, formatter) {
    "use strict";

    return Controller.extend("otccockpit.controller.App", {

        // expose the formatter object so the XML view can call ".formatter.xxx"
        formatter: formatter,

        // when an order is selected, bind the detail page to it and show it
        onSelectOrder: function (oEvent) {
            // works for both selectionChange (listItem param) and press (source)
            var oItem = oEvent.getParameter("listItem") || oEvent.getSource();
            var oContext = oItem && oItem.getBindingContext();
            if (!oContext) { return; }
            var oDetail = this.byId("detailPage");
            oDetail.bindElement(oContext.getPath());
            this.byId("splitApp").toDetail(oDetail.getId());
        },

        // live-filter the master list by order id or customer
        onSearch: function (oEvent) {
            var sQuery = oEvent.getSource().getValue();
            var aFilters = [];
            if (sQuery && sQuery.length > 0) {
                aFilters.push(new Filter({
                    filters: [
                        new Filter("OrderId", FilterOperator.Contains, sQuery),
                        new Filter("Customer", FilterOperator.Contains, sQuery)
                    ],
                    and: false
                }));
            }
            this.byId("orderList").getBinding("items").filter(aFilters);
        }
    });
});
