sap.ui.controller("com.zhenergy.data.manager.view.MyMaster", {
    onShuJuBiaoZhunGuanLiQuery : function(oEvent){
        var context = oEvent.getSource().getBindingContext();
		sap.ui.getCore().byId("idSplitApp").app.to("idBzglQuery", context);
		var page = sap.ui.getCore().byId("idSplitApp").app.getPage("idBzglQuery");
 	    page.setBindingContext(context); 
    },
    onShuJuBiaoZhunGuanLiCreate : function(oEvent){
        var context = oEvent.getSource().getBindingContext();
		sap.ui.getCore().byId("idSplitApp").app.to("idBzglCreate", context);
		var page = sap.ui.getCore().byId("idSplitApp").app.getPage("idBzglCreate");
 	    page.setBindingContext(context);
    },
    onShuJuBiaoZhunGuanLiUpdate : function(oEvent){
        var context = oEvent.getSource().getBindingContext();
		sap.ui.getCore().byId("idSplitApp").app.to("idBzglUpdate", context);
		var page = sap.ui.getCore().byId("idSplitApp").app.getPage("idBzglUpdate");
 	    page.setBindingContext(context);
    },
    onShuJuZhiLiangGuanLiQuery : function(oEvent){
        var context = oEvent.getSource().getBindingContext();
		sap.ui.getCore().byId("idSplitApp").app.to("idZlglQuery", context);
		var page = sap.ui.getCore().byId("idSplitApp").app.getPage("idZlglQuery");
 	    page.setBindingContext(context);
    },
    onShuJuZhiLiangGuanLiCreate : function(oEvent){
        var context = oEvent.getSource().getBindingContext();
		sap.ui.getCore().byId("idSplitApp").app.to("idZlglCreate", context);
		var page = sap.ui.getCore().byId("idSplitApp").app.getPage("idZlglCreate");
 	    page.setBindingContext(context);
    },
    onShuJuZhiLiangGuanLiUpdate : function(oEvent){
        var context = oEvent.getSource().getBindingContext();
		sap.ui.getCore().byId("idSplitApp").app.to("idZlglUpdate", context);
		var page = sap.ui.getCore().byId("idSplitApp").app.getPage("idZlglUpdate");
 	    page.setBindingContext(context);
    }

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.zhenergy.data.manager.view.MyMaster
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.zhenergy.data.manager.view.MyMaster
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.zhenergy.data.manager.view.MyMaster
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.zhenergy.data.manager.view.MyMaster
*/
//	onExit: function() {
//
//	}

});