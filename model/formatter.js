sap.ui.define([], function () {
    "use strict";

    // Each function maps a domain status string to a UI5 "ValueState"
    // (None / Success / Warning / Error / Information) or to an icon.
    return {
        statusState: function (s) {
            return { "Completed": "Success", "On Track": "Information",
                     "At Risk": "Warning", "Blocked": "Error" }[s] || "None";
        },
        creditState: function (s) {
            return { "Cleared": "Success", "In Review": "Warning",
                     "Blocked": "Error" }[s] || "None";
        },
        atpState: function (s) {
            return { "Confirmed": "Success", "Partial": "Warning",
                     "Backorder": "Error" }[s] || "None";
        },
        stepState: function (s) {
            return { "Done": "Success", "In Process": "Warning",
                     "Blocked": "Error", "Pending": "None" }[s] || "None";
        },
        stepIcon: function (s) {
            return { "Done": "sap-icon://accept", "In Process": "sap-icon://pending",
                     "Blocked": "sap-icon://error",
                     "Pending": "sap-icon://circle-task-2" }[s] || "sap-icon://circle-task-2";
        },
        money: function (v) {
            if (v === null || v === undefined || v === "") { return ""; }
            var n = Number(v);
            return isNaN(n) ? String(v) : n.toLocaleString("en-US");
        }
    };
});
