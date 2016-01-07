sap.ui.controller("com.zhenergy.data.manager.view.BiaoZhunGuanLiUpdate", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiUpdate
*/
	onInit: function() {

	},
	onDeleteBiaozhun:function(){
    	var oModel =sap.ui.getCore().getModel("oModel");
    	var id = this.getView().byId("DsCodeUpdate").getText();
    	var dialog = new sap.m.Dialog({
			title: '确认框',
			type: 'Message',
			content: new sap.m.Text({ text: '您确定删除吗?' }),
			beginButton: new sap.m.Button({
				text: '确认',
				press: function () {
                    oModel.remove("/EE_STANDARDSet('"+id+"')", {
                        success : jQuery.proxy(function() {
                            sap.ui.controller("com.zhenergy.data.manager.view.MyMaster").onBiaoZhunFunction();
                            sap.ui.getCore().byId("idSplitApp").app.backToPage("idBzglQuery");
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
	onUpdateBiaoZhun:function(){
	    var newBiaoZhunUpdate = this.getView().getModel("newBiaoZhunUpdate").getData(); 
	    newBiaoZhunUpdate["DsDomain"]="";
	    newBiaoZhunUpdate["DsMappingType"]="";
	    newBiaoZhunUpdate["DsSecurityLevel"]="";
	    newBiaoZhunUpdate["DsSubdomain"]="";
	    newBiaoZhunUpdate["DsTechnicalType"]="";
	    newBiaoZhunUpdate["DsType"]="";
	    newBiaoZhunUpdate["EffectiveStatus"]="";
	    newBiaoZhunUpdate["DsIsnull"]="";
	    var id= newBiaoZhunUpdate["DsCode"];
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
                                for(var i=0;i<data.results.length;i++){
                                    if(newBiaoZhunUpdate.DsNameEn.trim()==data.results[i].DsNameEn&&
                                       newBiaoZhunUpdate.DsNameCn.trim()==data.results[i].DsNameCn&& 
                                       newBiaoZhunUpdate.DomainId==data.results[i].DomainId&& 
                                       newBiaoZhunUpdate.SubdomainId==data.results[i].SubdomainId&& 
                                       newBiaoZhunUpdate.DsSystem.trim()==data.results[i].DsSystem){
                                        count++;
                                    }
                                }
                            }
                            if(count!=0){//说明数据库中已经存在
                                jQuery.sap.require("sap.m.MessageToast");
                                sap.m.MessageToast.show("该数据已经存在，请重新修改");
                            }else{
                                oModel.update("/EE_STANDARDSet('"+id+"')",newBiaoZhunUpdate, {
                                    success : jQuery.proxy(function() {
                                        sap.ui.controller("com.zhenergy.data.manager.view.MyMaster").onBiaoZhunFunction();
                                        sap.ui.getCore().byId("idSplitApp").app.to("idBzglQuery");
                                        jQuery.sap.require("sap.m.MessageToast");
                                        sap.m.MessageToast.show("数据标准修改成功");
                                    }, this),
                                    error : jQuery.proxy(function() {
                                        sap.m.MessageToast.show("数据标准修改失败");
                                    }, this)                         
                                });
                            }
                        }, this);
                        mParameters['error'] = jQuery.proxy(function(data) {
                            sap.m.MessageToast.show("网络连接失败，请重试");
                        }, this);
                        oModel.read("/EE_STANDARDSet?$filter=TypeId eq 'CC' and DsCode eq '' and DsNameEn eq '"+newBiaoZhunUpdate.DsNameEn+"' and DsNameCn eq '"+newBiaoZhunUpdate.DsNameCn+"' and DomainId eq '"+newBiaoZhunUpdate.DomainId+"' and SecurityLevelId eq 'DD' and EffectiveStatusId eq 'HH'",mParameters);   
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
	onChongZhiBiaozhun:function(){
	    var DsCodeUpdate = this.getView().byId("DsCodeUpdate").getText();
        //  	var DsNameEnUpdates = this.getView().byId("DsNameEnUpdates").getText();
         	
        //调用abap
        // var jModel = new sap.ui.model.json.JSONModel();
        var result = "";
        var mParameters = {};
        mParameters['async'] = true;
        mParameters['success'] = jQuery.proxy(function(data) {
            result = data.results[0];
        }, this);
        mParameters['error'] = jQuery.proxy(function(data) {
            sap.m.MessageToast.show("网络连接失败，请重试");
        }, this);
        var oModel1 = sap.ui.getCore().getModel("oModel");    
        oModel1.read("/EE_STANDARDSet?$filter=TypeId eq 'CC' and DsCode eq '"+DsCodeUpdate+"' and DsNameEn eq '' and DsNameCn eq '' and DomainId eq 'AA' and SecurityLevelId eq 'DD' and EffectiveStatusId eq 'HH'",mParameters);   
         	
         	var DsNameCnUpdate = this.getView().byId("DsNameCnUpdate");
            var DsNameEnUpdate = this.getView().byId("DsNameEnUpdate");
            var DsDomainUpdate = this.getView().byId("DsDomainUpdate");
            var DsSubdomainUpdate = this.getView().byId("DsSubdomainUpdate");
            var DsSystemUpdate = this.getView().byId("DsSystemUpdate");
            var DsBusinessUpdate = this.getView().byId("DsBusinessUpdate");
            
            var DsTypeUpdate = this.getView().byId("DsTypeUpdate");
            var DsSecurityLevelUpdate = this.getView().byId("DsSecurityLevelUpdate");
            var DsOwnerUpdate = this.getView().byId("DsOwnerUpdate");
            var DsRelationshipUpdate = this.getView().byId("DsRelationshipUpdate");
            var EffectiveVilueUpdate = this.getView().byId("EffectiveVilueUpdate");
            var DsIsnullUpdate = this.getView().byId("DsIsnullUpdate");
            
            var DsDefaultUpdate = this.getView().byId("DsDefaultUpdate");
            var DsTechnicalTypeUpdate = this.getView().byId("DsTechnicalTypeUpdate");
            var DsTechnicalFromatUpdate = this.getView().byId("DsTechnicalFromatUpdate");
            var DsMappingTypeUpdate = this.getView().byId("DsMappingTypeUpdate");
            var DsMappingTableUpdate = this.getView().byId("DsMappingTableUpdate");
            
            var DsTableCodeUpdate = this.getView().byId("DsTableCodeUpdate");
            var EffectiveStatusUpdate2 = this.getView().byId("EffectiveStatusUpdate2");
            var CreateDateUpdate2 = this.getView().byId("CreateDateUpdate2");
            var EffectiveDateUpdate2 = this.getView().byId("EffectiveDateUpdate2");
            var ExpiryDateUpdate2 = this.getView().byId("ExpiryDateUpdate2");
            var Memo1Update2 = this.getView().byId("Memo1Update2");
            var Memo2Update2 = this.getView().byId("Memo2Update2");
            var Memo3Update2 = this.getView().byId("Memo3Update2");

    		var dialog = new sap.m.Dialog({
			title: '确认框',
			type: 'Message',
			content: new sap.m.Text({ text: '是否重置?' }),
			beginButton: new sap.m.Button({
				text: '是',
				press: function () {
                    DsNameCnUpdate.setValue(result.DsNameCn);
                    DsNameEnUpdate.setValue(result.DsNameEn);
                    DsDomainUpdate.setSelectedKey(result.DomainId);
                    DsSubdomainUpdate.setSelectedKey(result.SubdomainId);
                    DsBusinessUpdate.setValue(result.DsBusiness);
                    DsSystemUpdate.setValue(result.DsSystem);
                    
                    DsTypeUpdate.setSelectedKey(result.TypeId);
                    DsSecurityLevelUpdate.setSelectedKey(result.SecurityLevelId);
                    DsOwnerUpdate.setValue(result.DsOwner);
                    DsRelationshipUpdate.setValue(result.DsRelationship);
                    EffectiveVilueUpdate.setValue(result.EffectiveVilue);
                    DsIsnullUpdate.setSelectedKey(result.IsnullId);
                    
                    DsDefaultUpdate.setValue(result.DsDefault);
                    DsTechnicalTypeUpdate.setSelectedKey(result.TechnicalTypeId);
                    DsTechnicalFromatUpdate.setValue(result.DsTechnicalFromat);
                    DsMappingTypeUpdate.setSelectedKey(result.MappingTypeId);
                    DsMappingTableUpdate.setValue(result.DsMappingTable);
                    
                    DsTableCodeUpdate.setValue(result.DsTableCode);
                    EffectiveStatusUpdate2.setSelectedKey(result.EffectiveStatusId);
                    CreateDateUpdate2.setValue(result.CreateDate);
                    
                    EffectiveDateUpdate2.setValue(result.EffectiveDate);
                    ExpiryDateUpdate2.setValue(result.ExpiryDate);
                    Memo1Update2.setValue(result.Memo1);
                    Memo2Update2.setValue(result.Memo2);
                    Memo3Update2.setValue(result.Memo3);
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
	},
	onQueryById:function(){

	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiUpdate
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiUpdate
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiUpdate
*/
//	onExit: function() {
//
//	}

});