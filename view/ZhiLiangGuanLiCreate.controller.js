sap.ui.controller("com.zhenergy.data.manager.view.ZhiLiangGuanLiCreate", {
    initializeData : function() {
        // var usrid = jQuery.sap.getUriParameters().get("usrid").toUpperCase();
        this.getView().getModel("newZhiLiang").setData({
            Detail: {
                DqTypeId: "II",
                DqSystemId:"JJ",
                DqDimentationId:"KK",
                EffectiveStatusId:"LL",
                DqCheckFrequencyId:"MM",
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
        var DqCheckFrequencyId="";
        if(newZhiLiang.DqCheckFrequency==0){
            DqCheckFrequencyId='M1';
        }
        if(newZhiLiang.DqCheckFrequency==1){
            DqCheckFrequencyId='M2';
        }
        if(newZhiLiang.DqCheckFrequency==2){
            DqCheckFrequencyId='M3';
        }
        if(newZhiLiang.DqCheckFrequency==3){
            DqCheckFrequencyId='M4';
        }
        if(newZhiLiang.DqCheckFrequency==4){
            DqCheckFrequencyId='M5';
        }
                if(newZhiLiang.DqCheckFrequency==5){
            DqCheckFrequencyId='M6';
        }

        var payLoad = {
            DqTypeId:newZhiLiang.DqTypeId,
            DqSystemId:newZhiLiang.DqSystemId,
            ItemTypeNameEn:newZhiLiang.ItemTypeNameEn,
            ItemTypeNameCn:newZhiLiang.ItemTypeNameCn,
            ItemNameEn:newZhiLiang.ItemNameEn,
            ItemNameCn:newZhiLiang.ItemNameCn,
            ItemDescribation:newZhiLiang.ItemDescribation,
            DqDimentationId:newZhiLiang.DqDimentationId,
            RullDescribation:newZhiLiang.RullDescribation,
            DqOwner:newZhiLiang.DqOwner,
            DqCheckDate:newZhiLiang.DqCheckDate,
            EffectiveStatusId:newZhiLiang.EffectiveStatusId,
            CreateDate:newZhiLiang.CreateDate,
            EffectiveDate:newZhiLiang.EffectiveDate,
            ExpiryDate:newZhiLiang.ExpiryDate,
            Memo1:newZhiLiang.Memo1,
            Memo2:newZhiLiang.Memo2,
            Memo3:newZhiLiang.Memo3,
            DqCheckFrequencyId:DqCheckFrequencyId
        };
        console.log(payLoad);
        var oModel = this.getView().getModel("oModel");
        //是否提交
            var dialog = new sap.m.Dialog({
				title: '确认框',
				type: 'Message',
				content: new sap.m.Text({ text: '是否保存?' }),
				beginButton: new sap.m.Button({
					text: '确认',
					press: function () {
                        oModel.create("/EE_QUALITYSet",payLoad, {
                            success : jQuery.proxy(function() {
                                sap.ui.controller("com.zhenergy.data.manager.view.MyMaster").onZhiLiangFunction();
                                sap.ui.getCore().byId("idSplitApp").app.backToPage("idZlglQuery");
                                jQuery.sap.require("sap.m.MessageToast");
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