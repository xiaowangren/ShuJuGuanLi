sap.ui.controller("com.zhenergy.data.manager.view.ZhiLiangGuanLiCreate", {
    initializeData : function() {
        // var usrid = jQuery.sap.getUriParameters().get("usrid").toUpperCase();
        sap.ui.getCore().byId("idZlglCreate").getModel("newZhiLiang").setData({
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
        // console.log(newZhiLiang);
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
        // console.log(payLoad);
        var oModel = this.getView().getModel("oModel");
        //是否提交
            var dialog = new sap.m.Dialog({
				title: '确认框',
				type: 'Message',
				content: new sap.m.Text({ text: '是否保存?' }),
				beginButton: new sap.m.Button({
					text: '确认',
					press: function () {
					    //判断数据是否存在
					    var count = 0;
					    var mParameters = {};
                        mParameters['async'] = true;
                        mParameters['success'] = jQuery.proxy(function(data) {
                            if(data.results.length!=0){
                                
                                if(payLoad.ItemTypeNameCn!=undefined){
                                    payLoad.ItemTypeNameCn = payLoad.ItemTypeNameCn.trim();
                                }
                                if(payLoad.ItemTypeNameEn!=undefined){
                                    payLoad.ItemTypeNameEn = payLoad.ItemTypeNameEn.trim();
                                }
                                if(payLoad.ItemNameEn!=undefined){
                                    payLoad.ItemNameEn = payLoad.ItemNameEn.trim();
                                }
                                if(payLoad.ItemNameCn!=undefined){
                                    payLoad.ItemNameCn = payLoad.ItemNameCn.trim();
                                }
                                for(var i=0;i<data.results.length;i++){
                                    if(payLoad.DqTypeId==data.results[i].DqTypeId&&
                                       payLoad.DqSystemId==data.results[i].DqSystemId&& 
                                       payLoad.ItemTypeNameCn.trim()==data.results[i].ItemTypeNameCn&& 
                                       payLoad.ItemTypeNameEn.trim()==data.results[i].ItemTypeNameEn&& 
                                       payLoad.ItemNameEn.trim()==data.results[i].ItemNameEn&& 
                                       payLoad.ItemNameCn.trim()==data.results[i].ItemNameCn){
                                       count++;
                                    }
                                }
                            }
                            if(count!=0){//说明数据库中已经存在
                                // sap.ui.controller("com.zhenergy.data.manager.view.MyMaster").onBiaoZhunFunction();
                                jQuery.sap.require("sap.m.MessageToast");
                                sap.m.MessageToast.show("该数据已经存在，请重新创建");
                            }else{
                                oModel.create("/EE_QUALITYSet",payLoad, {
                                    success : jQuery.proxy(function() {
                                        sap.ui.controller("com.zhenergy.data.manager.view.MyMaster").onZhiLiangFunction();
                                        sap.ui.getCore().byId("idSplitApp").app.to("idZlglQuery");
                                        jQuery.sap.require("sap.m.MessageToast");
                                        sap.m.MessageToast.show("数据质量新增成功");
                                    }, this),
                                    error : jQuery.proxy(function() {
                                        sap.m.MessageToast.show("数据质量新增失败");
                                    }, this)                         
                                }); 
                            }
                        }, this);
                        mParameters['error'] = jQuery.proxy(function(data) {
                            sap.m.MessageToast.show("网络连接失败，请重试");
                        }, this);

					   oModel.read("/EE_QUALITYSet?$filter=DqTypeId eq 'II' and DqSystemId eq 'JJ' and ItemNameCn eq '' and DqDimentationId eq 'KK' and DqCheckFrequencyId eq 'MM' and EffectiveStatusId eq 'LL'",mParameters);   
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
        //this.initializeData();
        // var combobox = this.getView().byId("ziZhuTiYuCreateComboBox");
        //     var DsNameCnCreate = this.getView().byId("DsNameCnCreate");
        //     var DsNameEnCreate = this.getView().byId("DsNameEnCreate");
        //     var DsDomainCreate = this.getView().byId("DsDomainCreate");
        //     var DsSystemCreate = this.getView().byId("DsSystemCreate");
        //     var DsBusinessCreate = this.getView().byId("DsBusinessCreate");
        //     var DsTypeCreate = this.getView().byId("DsTypeCreate");
        //     var DsSecurityLevelCreate = this.getView().byId("DsSecurityLevelCreate");
        //     var DsOwnerCreate = this.getView().byId("DsOwnerCreate");
        //     var DsRelationshipCreate = this.getView().byId("DsRelationshipCreate");
        //     var EffectiveVilueCreate = this.getView().byId("EffectiveVilueCreate");
        //     var DsIsnullCreate = this.getView().byId("DsIsnullCreate");
        //     var DsDefaultCreate = this.getView().byId("DsDefaultCreate");
        //     var DsTechnicalTypeCreate = this.getView().byId("DsTechnicalTypeCreate");
        //     var DsTechnicalFromatCreate = this.getView().byId("DsTechnicalFromatCreate");
        //     var DsMappingTypeCreate = this.getView().byId("DsMappingTypeCreate");
        //     var DsMappingTableCreate = this.getView().byId("DsMappingTableCreate");
        //     var DsTableCodeCreate = this.getView().byId("DsTableCodeCreate");
        //     var EffectiveStatusCreate = this.getView().byId("EffectiveStatusCreate");
        //     var CreateDateCreate1 = this.getView().byId("CreateDateCreate1");
        //     var EffectiveDateCreate1 = this.getView().byId("EffectiveDateCreate1");
        //     var ExpiryDateCreate1 = this.getView().byId("ExpiryDateCreate1");
        //     var Memo1Create1 = this.getView().byId("Memo1Create1");
        //     var Memo2Create1 = this.getView().byId("Memo2Create1");
        //     var Memo3Create1 = this.getView().byId("Memo3Create1");

            var dialog = new sap.m.Dialog({
				title: '确认框',
				type: 'Message',
				content: new sap.m.Text({ text: '是否重置?' }),
				beginButton: new sap.m.Button({
					text: '是',
					press: function () {
					   sap.ui.controller("com.zhenergy.data.manager.view.ZhiLiangGuanLiCreate").initializeData();

                        // DsNameCnCreate.setValue();
                        // DsNameEnCreate.setValue();
                        // DsDomainCreate.setSelectedKey("AA");
                        // DsSystemCreate.setValue();
                        // DsBusinessCreate.setValue();
                        // DsTypeCreate.setSelectedKey("CC");
                        // DsSecurityLevelCreate.setSelectedKey("DD");
                        // DsOwnerCreate.setValue();
                        // DsRelationshipCreate.setValue();
                        // EffectiveVilueCreate.setValue();
                        // DsIsnullCreate.setSelectedKey("EE");
                        // DsDefaultCreate.setValue();
                        // DsTechnicalTypeCreate.setSelectedKey("FF");
                        // DsTechnicalFromatCreate.setValue();
                        // DsMappingTypeCreate.setSelectedKey("GG");
                        // DsMappingTableCreate.setValue();
                        // DsTableCodeCreate.setValue();
                        // EffectiveStatusCreate.setSelectedKey("HH");
                        // CreateDateCreate1.setValue();
                        // EffectiveDateCreate1.setValue();
                        // ExpiryDateCreate1.setValue();
                        // Memo1Create1.setValue();
                        // Memo2Create1.setValue();
                        // Memo3Create1.setValue();
                        // combobox.setSelectedKey("BB");
                        // // combobox.removeAllItems();
                        // // combobox.addItem(new sap.ui.core.ListItem({text:"",key:"BB"}));
                        // // combobox.setSelectedKey("BB");
                        // // combobox.removeAllItems();
						dialog.close();
					}
				}),
				endButton: new sap.m.Button({
					text: '否',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
			dialog.open();
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