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
    },
    onChongZhiZhiLiang:function(){
        this.getView().byId("shuJuXiangLeiXingQuery").setSelectedKey("999");
        this.getView().byId("xiTongQuery").setSelectedKey("999");
        this.getView().byId("shuJuXiangZhongWenMingCheng").setValue();
        this.getView().byId("shuJuZhiLiangJianChaWeiDu").setSelectedKey("999");
        this.getView().byId("jianChaWeiDu").setSelectedKey("999");
        this.getView().byId("shiFouYouXiaoZhiLiang").setSelectedKey("999");
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