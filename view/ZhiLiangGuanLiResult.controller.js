sap.ui.controller("com.zhenergy.data.manager.view.ZhiLiangGuanLiResult", {
    handleDetailsPress:function(oEvent){
        var rowContext = oEvent.getParameters().rowContext;
         	    var table = sap.ui.getCore().byId("zhiLiangQueryResult");
         	    var model = table.getModel(); 
         	    var sPath = oEvent.getSource().getBindingContext().sPath;
         	    var data  = model.getProperty(sPath);
         	    sap.ui.getCore().byId("idSplitApp").app.to("idZlglUpdate", oEvent.getSource().getBindingContext());
        		var page = sap.ui.getCore().byId("idSplitApp").app.getPage("idZlglUpdate");
        		var pinDu=0;
        		if(data.DqCheckFrequencyId=='M1'){
        		    pinDu=0;
        		}
        		if(data.DqCheckFrequencyId=='M2'){
        		    pinDu=1;
        		}
        		if(data.DqCheckFrequencyId=='M3'){
        		    pinDu=2;
        		}
        		if(data.DqCheckFrequencyId=='M4'){
        		    pinDu=3;
        		}
        		if(data.DqCheckFrequencyId=='M5'){
        		    pinDu=4;
        		}
        		if(data.DqCheckFrequencyId=='M6'){
        		    pinDu=5;
        		}
        // 		data["pinDu"]=pinDu;
                data.DqCheckFrequencyId=pinDu;
        		var oModel = new sap.ui.model.json.JSONModel(data);
			    page.setModel(oModel,"newZhiLiangUpdate");
    }
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiResult
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiResult
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiResult
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiResult
*/
//	onExit: function() {
//
//	}

});