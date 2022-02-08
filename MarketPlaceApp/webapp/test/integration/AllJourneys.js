/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/MarketPlaceApp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/MarketPlaceApp/test/integration/pages/Worklist",
	"zjblessons/MarketPlaceApp/test/integration/pages/Object",
	"zjblessons/MarketPlaceApp/test/integration/pages/NotFound",
	"zjblessons/MarketPlaceApp/test/integration/pages/Browser",
	"zjblessons/MarketPlaceApp/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.MarketPlaceApp.view."
	});

	sap.ui.require([
		"zjblessons/MarketPlaceApp/test/integration/WorklistJourney",
		"zjblessons/MarketPlaceApp/test/integration/ObjectJourney",
		"zjblessons/MarketPlaceApp/test/integration/NavigationJourney",
		"zjblessons/MarketPlaceApp/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});