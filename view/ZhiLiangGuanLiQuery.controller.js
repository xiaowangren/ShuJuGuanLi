sap.ui.controller("com.zhenergy.data.manager.view.ZhiLiangGuanLiQuery", {

    onQueryZhiLiang:function(){
        var shuJuXiangLeiXingQuery =  this.getView().byId("shuJuXiangLeiXingQuery").getSelectedKey();
        var xiTongQuery = this.getView().byId("xiTongQuery").getSelectedKey();
        var shuJuXiangZhongWenMingCheng = this.getView().byId("shuJuXiangZhongWenMingCheng").getValue();
        var shuJuZhiLiangJianChaWeiDu = this.getView().byId("shuJuZhiLiangJianChaWeiDu").getSelectedKey();
        var jianChaWeiDu = this.getView().byId("jianChaWeiDu").getSelectedKey();
        var shiFouYouXiaoZhiLiang = this.getView().byId("shiFouYouXiaoZhiLiang").getSelectedKey();  
        console.log(shuJuXiangLeiXingQuery+"---"+xiTongQuery+"---"+shuJuXiangZhongWenMingCheng);
        console.log(shuJuZhiLiangJianChaWeiDu+"---"+jianChaWeiDu+"---"+shiFouYouXiaoZhiLiang);
         //调用abap
        var jModel = new sap.ui.model.json.JSONModel();
        var table = sap.ui.getCore().byId("zhiLiangQueryResult");
        var mParameters = {};
        mParameters['async'] = true;
        mParameters['success'] = jQuery.proxy(function(data) {
            jModel.setData({mataModelZhiLiang:data.results});
            table.setModel(jModel);
            // console.log(table);
        }, this);
        mParameters['error'] = jQuery.proxy(function(data) {
            sap.m.MessageToast.show("网络连接失败，请重试");
        }, this);
        var oModel1 = sap.ui.getCore().getModel("oModel");  
        // oModel1.read("/EE_QUALITYSet?$filter=DqTypeId eq 'II' and DqSystemId eq 'JJ' and ItemTypeNameCn eq '主表' and DqDimentationId eq 'KK' and DqCheckFrequencyId eq 'MM' and EffectiveStatusId eq 'LL'",mParameters);
        oModel1.read("/EE_QUALITYSet?$filter=DqTypeId eq '"+shuJuXiangLeiXingQuery+"' and DqSystemId eq '"+xiTongQuery+"' and ItemNameCn eq '"+shuJuXiangZhongWenMingCheng+"' and DqDimentationId eq '"+shuJuZhiLiangJianChaWeiDu+"' and DqCheckFrequencyId eq '"+jianChaWeiDu+"' and EffectiveStatusId eq '"+shiFouYouXiaoZhiLiang+"'",mParameters);   
    },
    onChongZhiZhiLiang:function(){
        sap.ui.getCore().byId("idZlglQuery").byId("shuJuXiangLeiXingQuery").setSelectedKey("II");
        sap.ui.getCore().byId("idZlglQuery").byId("xiTongQuery").setSelectedKey("JJ");
        sap.ui.getCore().byId("idZlglQuery").byId("shuJuXiangZhongWenMingCheng").setValue();
        sap.ui.getCore().byId("idZlglQuery").byId("shuJuZhiLiangJianChaWeiDu").setSelectedKey("KK");
        sap.ui.getCore().byId("idZlglQuery").byId("jianChaWeiDu").setSelectedKey("MM");
        sap.ui.getCore().byId("idZlglQuery").byId("shiFouYouXiaoZhiLiang").setSelectedKey("LL");
    }
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiQuery
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiQuery
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiQuery
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiQuery
*/
//	onExit: function() {
//
//	}

});