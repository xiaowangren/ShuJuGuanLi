sap.ui.controller("com.zhenergy.data.manager.view.ZhiLiangGuanLiCreate", {
    initializeData : function() {
        // var usrid = jQuery.sap.getUriParameters().get("usrid").toUpperCase();
        this.getView().getModel("newZhiLiang").setData({
            Detail: {
                DqType: "999",
                DqSystem:"999",
                DqDimentation:"999",
                EffectiveStatus:"999",
                DqCheckDate:"999",
                DqCheckFrequency:0
            }
        });
    },
    onInit: function() {
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "newZhiLiang");
        this.initializeData();
	},
// 	onSaveZhiLiang : function(){
//         var newZhiLiang = this.getView().getModel("newZhiLiang").getData().Detail;
//         console.log(newZhiLiang);
//     },
    onSaveZhiLiang : function(){
        var newZhiLiang = this.getView().getModel("newZhiLiang").getData().Detail;
        console.log(newZhiLiang);
        var oModel = this.getView().getModel();
        //是否提交
            var dialog = new sap.m.Dialog({
				title: '确认框',
				type: 'Message',
				content: new sap.m.Text({ text: '是否保存?' }),
				beginButton: new sap.m.Button({
					text: '确认',
					press: function () {
                        oModel.create("/",newZhiLiang, {
                            success : jQuery.proxy(function() {
                                // sap.ui.getCore().byId("idSplitApp").app.backToPage("idPersonInfo");
                                // this.initializeData();
                                // jQuery.sap.require("sap.m.MessageToast");
                                sap.m.MessageToast.show("数据质量新增成功");
                            }, this),
                            error : jQuery.proxy(function() {
                                sap.m.MessageToast.show("数据质量新增失败");
                            }, this)                         
                        });
						dialog.close();
					}
				}),
				endButton: new sap.m.Button({
					text: '取消',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
			dialog.open();
    },
    onChongZhiZhiLiang: function(){
        this.initializeData();
    }
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiCreate
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiCreate
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiCreate
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiCreate
*/
//	onExit: function() {
//
//	}

});