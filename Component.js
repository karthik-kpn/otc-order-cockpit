sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    "use strict";

    return UIComponent.extend("otccockpit.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            // run the base component initialisation (reads manifest, builds models, root view)
            UIComponent.prototype.init.apply(this, arguments);
        }
    });
});
