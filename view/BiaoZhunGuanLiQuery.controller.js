sap.ui.controller("com.zhenergy.data.manager.view.BiaoZhunGuanLiQuery", {

    onBiaoZhunQuery:function(){
        var shuJuBiaoZhunLeiBieQuery =  this.getView().byId("shuJuBiaoZhunLeiBieQuery").getSelectedKey();
        var shuJuXiangBianHaoQuery = this.getView().byId("shuJuXiangBianHaoQuery").getValue();
        var shuJuXiangMingChengQuery = this.getView().byId("shuJuXiangMingChengQuery").getValue();
        var zhuTiYuQuery = this.getView().byId("zhuTiYuQuery").getSelectedKey();
        var shuJuAnQuanFenJiQuery = this.getView().byId("shuJuAnQuanFenJiQuery").getSelectedKey();
        var shiFouYouXiaoQuery = this.getView().byId("shiFouYouXiaoQuery").getSelectedKey();
        // console.log(shuJuBiaoZhunLeiBieQuery+"==="+shuJuXiangBianHaoQuery+"===="+shuJuXiangMingChengQuery);
        // console.log(zhuTiYuQuery+"==="+shuJuAnQuanFenJiQuery+"===="+shiFouYouXiaoQuery);
        //调用abap
        var jModel = new sap.ui.model.json.JSONModel();
        var table = sap.ui.getCore().byId("biaoZhunQueryResult");
        var mParameters = {};
        mParameters['async'] = true;
        mParameters['success'] = jQuery.proxy(function(data) {
            //  console.log(data.results);
            jModel.setData({mataModel:data.results});
            table.setModel(jModel);
            // console.log(table);
        }, this);
        mParameters['error'] = jQuery.proxy(function(data) {
            sap.m.MessageToast.show("网络连接失败，请重试");
        }, this);
        var oModel1 = sap.ui.getCore().getModel("oModel");    
        oModel1.read("/EE_STANDARDSet?$filter=TypeId eq '"+shuJuBiaoZhunLeiBieQuery+"' and DsCode eq '"+shuJuXiangBianHaoQuery+"' and DsNameEn eq '' and DsNameCn eq '"+shuJuXiangMingChengQuery+"' and DomainId eq '"+zhuTiYuQuery+"' and SecurityLevelId eq '"+shuJuAnQuanFenJiQuery+"' and EffectiveStatusId eq '"+shiFouYouXiaoQuery+"'",mParameters);   
    // 		var oFilters = [];
    // 		var oFilter = new sap.ui.model.Filter("Pernr", sap.ui.model.FilterOperator.EQ, usrid);
    // 		oFilters.push(oFilter);
    // 		// update list binding
    // 		var table = sap.ui.getCore().byId("biaoZhunQueryResult");
    // 		table.bindRows("/EE_EDUCATION_SET");
    // 		table.getBinding("rows").filter(oFilters, sap.ui.model.FilterType.Application);
        
    },
    onBiaozhunChongZhi: function(){
        sap.ui.getCore().byId("idBzglQuery").byId("shuJuBiaoZhunLeiBieQuery").setSelectedKey("CC");
        sap.ui.getCore().byId("idBzglQuery").byId("shuJuXiangBianHaoQuery").setValue();
        sap.ui.getCore().byId("idBzglQuery").byId("shuJuXiangMingChengQuery").setValue();
        sap.ui.getCore().byId("idBzglQuery").byId("zhuTiYuQuery").setSelectedKey("AA");
        sap.ui.getCore().byId("idBzglQuery").byId("shuJuAnQuanFenJiQuery").setSelectedKey("DD");
        sap.ui.getCore().byId("idBzglQuery").byId("shiFouYouXiaoQuery").setSelectedKey("HH");
        //缺省状态 根据缺省值去查询  则以缺省条件查询。结果显示前100条
        
    }
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiQuery
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiQuery
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiQuery
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiQuery
*/
//	onExit: function() {
//
//	}

});