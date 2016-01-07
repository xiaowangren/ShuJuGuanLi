sap.ui.controller("com.zhenergy.data.manager.view.ZhiLiangGuanLiUpdate", {
    onDeleteZhiLiang:function(){
        var oModel =sap.ui.getCore().getModel("oModel");
    	var id = this.getView().byId("RullNoUpdate").getText();
    	var dialog = new sap.m.Dialog({
			title: '确认框',
			type: 'Message',
			content: new sap.m.Text({ text: '您确定删除吗?' }),
			beginButton: new sap.m.Button({
				text: '确认',
				press: function () {
                    oModel.remove("/EE_QUALITYSet('"+id+"')", {
                        success : jQuery.proxy(function() {
                            sap.ui.controller("com.zhenergy.data.manager.view.MyMaster").onZhiLiangFunction();
                            sap.ui.getCore().byId("idSplitApp").app.backToPage("idZlglQuery");
                            jQuery.sap.require("sap.m.MessageToast");
                            sap.m.MessageToast.show("删除成功");
                        }, this),
                        error : jQuery.proxy(function() {
                            sap.m.MessageToast.show("删除失败");
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
    onSaveZhiLiang:function(){
	    var newZhiLiangUpdate = this.getView().getModel("newZhiLiangUpdate").getData(); 
	    if(newZhiLiangUpdate.DqCheckFrequencyId==0){
	       newZhiLiangUpdate.DqCheckFrequencyId='M1'; 
	    }
	    if(newZhiLiangUpdate.DqCheckFrequencyId==1){
	       newZhiLiangUpdate.DqCheckFrequencyId='M2'; 
	    }
	    if(newZhiLiangUpdate.DqCheckFrequencyId==2){
	       newZhiLiangUpdate.DqCheckFrequencyId='M3'; 
	    }
	    if(newZhiLiangUpdate.DqCheckFrequencyId==3){
	       newZhiLiangUpdate.DqCheckFrequencyId='M4'; 
	    }
	    if(newZhiLiangUpdate.DqCheckFrequencyId==4){
	       newZhiLiangUpdate.DqCheckFrequencyId='M5'; 
	    }
	    if(newZhiLiangUpdate.DqCheckFrequencyId==5){
	       newZhiLiangUpdate.DqCheckFrequencyId='M6'; 
	    }
	    newZhiLiangUpdate["DqType"]="";
	    newZhiLiangUpdate["DqSystem"]="";
	    newZhiLiangUpdate["DqDimentation"]="";
	    newZhiLiangUpdate["DqCheckFrequency"]="";
	    newZhiLiangUpdate["EffectiveStatus"]="";
	    var id= newZhiLiangUpdate["RullNo"];
        var oModel = sap.ui.getCore().getModel("oModel");
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
                                if(newZhiLiangUpdate.ItemTypeNameCn!=undefined){
                                    newZhiLiangUpdate.ItemTypeNameCn = newZhiLiangUpdate.ItemTypeNameCn.trim();
                                }
                                if(newZhiLiangUpdate.ItemTypeNameEn!=undefined){
                                    newZhiLiangUpdate.ItemTypeNameEn = newZhiLiangUpdate.ItemTypeNameEn.trim();
                                }
                                if(newZhiLiangUpdate.ItemNameEn!=undefined){
                                    newZhiLiangUpdate.ItemNameEn = newZhiLiangUpdate.ItemNameEn.trim();
                                }
                                if(newZhiLiangUpdate.ItemNameCn!=undefined){
                                    newZhiLiangUpdate.ItemNameCn = newZhiLiangUpdate.ItemNameCn.trim();
                                }
                                for(var i=0;i<data.results.length;i++){
                                    if(newZhiLiangUpdate.DqTypeId==data.results[i].DqTypeId&&
                                       newZhiLiangUpdate.DqSystemId==data.results[i].DqSystemId&& 
                                       newZhiLiangUpdate.ItemTypeNameCn.trim()==data.results[i].ItemTypeNameCn&& 
                                       newZhiLiangUpdate.ItemTypeNameEn.trim()==data.results[i].ItemTypeNameEn&& 
                                       newZhiLiangUpdate.ItemNameEn.trim()==data.results[i].ItemNameEn&& 
                                       newZhiLiangUpdate.ItemNameCn.trim()==data.results[i].ItemNameCn){
                                        count++;
                                    }
                                }
                            }
                            if(count!=0){//说明数据库中已经存在
                                // sap.ui.controller("com.zhenergy.data.manager.view.MyMaster").onBiaoZhunFunction();
                                jQuery.sap.require("sap.m.MessageToast");
                                sap.m.MessageToast.show("该数据已经存在，请重新修改");
                            }else{
                                oModel.update("/EE_QUALITYSet('"+id+"')",newZhiLiangUpdate, {
                                    success : jQuery.proxy(function() {
                                        sap.ui.controller("com.zhenergy.data.manager.view.MyMaster").onZhiLiangFunction();
                                        sap.ui.getCore().byId("idSplitApp").app.to("idZlglQuery");
                                        jQuery.sap.require("sap.m.MessageToast");
                                        sap.m.MessageToast.show("数据质量修改成功");
                                    }, this),
                                    error : jQuery.proxy(function() {
                                        sap.m.MessageToast.show("数据质量修改失败");
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
	onCancelZhiLiang:function(){
	    var id = this.getView().byId("RullNoUpdate").getText();
        //调用abap
        var result = "";
        var mParameters = {};
        mParameters['async'] = true;
        mParameters['success'] = jQuery.proxy(function(data) {
            result = data;
        }, this);
        mParameters['error'] = jQuery.proxy(function(data) {
            sap.m.MessageToast.show("网络连接失败，请重试");
        }, this);
        var oModel1 = sap.ui.getCore().getModel("oModel");    
        oModel1.read("/EE_QUALITYSet('"+id+"')",mParameters);
        var DqTypeIdUpdate = this.getView().byId("DqTypeIdUpdate");
        var DqSystemIdUpdate = this.getView().byId("DqSystemIdUpdate");
        var ItemTypeNameEnUpdate = this.getView().byId("ItemTypeNameEnUpdate");
        var ItemTypeNameCnUpdate = this.getView().byId("ItemTypeNameCnUpdate");
        var ItemNameEnUpdate = this.getView().byId("ItemNameEnUpdate");
        var ItemNameCnUpdate = this.getView().byId("ItemNameCnUpdate"); 
        var ItemDescribationUpdate = this.getView().byId("ItemDescribationUpdate");
        var DqDimentationIdUpdate = this.getView().byId("DqDimentationIdUpdate");
        var RullDescribationUpdate = this.getView().byId("RullDescribationUpdate");
        var DqOwnerUpdate = this.getView().byId("DqOwnerUpdate");
        var DqCheckFrequencyIdUpdate = this.getView().byId("DqCheckFrequencyIdUpdate");
        var DqCheckDateUpdate = this.getView().byId("DqCheckDateUpdate");
        var EffectiveStatusIdUpdate = this.getView().byId("EffectiveStatusIdUpdate");
        var CreateDateUpdateZl = this.getView().byId("CreateDateUpdateZl");
        var EffectiveDateUpdateZl = this.getView().byId("EffectiveDateUpdateZl");
        var ExpiryDateUpdateZl = this.getView().byId("ExpiryDateUpdateZl");
        var Memo1ZhiLiangUpdate = this.getView().byId("Memo1ZhiLiangUpdate");
        var Memo2ZhiLiangUpdate = this.getView().byId("Memo2ZhiLiangUpdate");
        var Memo3ZhiLiangUpdate = this.getView().byId("Memo3ZhiLiangUpdate");

    	var dialog = new sap.m.Dialog({
			title: '确认框',
			type: 'Message',
			content: new sap.m.Text({ text: '是否重置?' }),
			beginButton: new sap.m.Button({
				text: '是',
				press: function () {
                    DqTypeIdUpdate.setSelectedKey(result.DqTypeId);
                    DqSystemIdUpdate.setSelectedKey(result.DqSystemId);
                    ItemTypeNameEnUpdate.setValue(result.ItemTypeNameEn);
                    ItemTypeNameCnUpdate.setValue(result.ItemTypeNameCn);
                    ItemNameEnUpdate.setValue(result.ItemNameEn);
                    ItemNameCnUpdate.setValue(result.ItemNameCn);
                    ItemDescribationUpdate.setValue(result.ItemDescribation);
                    DqDimentationIdUpdate.setSelectedKey(result.DqDimentationId);
                    RullDescribationUpdate.setValue(result.RullDescribation);
                    DqOwnerUpdate.setValue(result.DqOwner);
                    
                    var index = 0;
                    if(result.DqCheckFrequencyId=='M1'){
                        index=0;
                    }
                    if(result.DqCheckFrequencyId=='M2'){
                        index=1;
                    }
                    if(result.DqCheckFrequencyId=='M3'){
                        index=2;
                    }
                    if(result.DqCheckFrequencyId=='M4'){
                        index=3;
                    }
                    if(result.DqCheckFrequencyId=='M5'){
                        index=4;
                    }
                    if(result.DqCheckFrequencyId=='M6'){
                        index=5;
                    }
                    DqCheckFrequencyIdUpdate.setSelectedIndex(index);
                    DqCheckDateUpdate.setValue(result.DqCheckDate);
                    EffectiveStatusIdUpdate.setSelectedKey(result.EffectiveStatusId);
                    CreateDateUpdateZl.setValue(result.CreateDate);
                    EffectiveDateUpdateZl.setValue(result.EffectiveDate);
                    ExpiryDateUpdateZl.setValue(result.ExpiryDate);
                    Memo1ZhiLiangUpdate.setValue(result.Memo1);
                    Memo2ZhiLiangUpdate.setValue(result.Memo2);
                    Memo3ZhiLiangUpdate.setValue(result.Memo3);
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
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiUpdate
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiUpdate
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiUpdate
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiUpdate
*/
//	onExit: function() {
//
//	}

});