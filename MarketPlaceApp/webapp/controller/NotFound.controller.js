sap.ui.define([
		"zjblessons/MarketPlaceApp/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zjblessons.MarketPlaceApp.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);