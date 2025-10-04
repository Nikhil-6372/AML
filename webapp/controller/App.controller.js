sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("com.aml.amlui07.controller.App", {
      onInit() {
          var oModel = this.getOwnerComponent().getModel("pm");
          this.getView().setModel(oModel, "pm");
      }
  });
});
