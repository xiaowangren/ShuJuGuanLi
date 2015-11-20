sap.ui.controller("com.zhenergy.data.manager.view.BiaoZhunGuanLiCreate", {
    initializeData : function() {
        // var usrid = jQuery.sap.getUriParameters().get("usrid").toUpperCase();
        this.getView().getModel("newBiaoZhun").setData({
            Detail: {
                DsDomain: "999",
                DsSubdomain:"999",
                DsSecurityLevel:"999",
                DsType:"999",
                DsIsnull:"999",
                DsTechnicalType:"999",
                DsMappingType:"999",
                EffectiveStatus:"999"
            }
        });
    },
    onInit: function() {
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "newBiaoZhun");
        this.initializeData();
	},
    onSaveBiaoZhun : function(){
        var newBiaoZhun = this.getView().getModel("newBiaoZhun").getData().Detail;
        console.log(newBiaoZhun);
    },
    onChongZhiBiaoZhun: function(){
        this.initializeData();
    }
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiCreate
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiCreate
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiCreate
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiCreate
*/
//	onExit: function() {
//
//	}

});