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
	onChongZhiBiaozhun:function(){
            var combobox = this.getView().byId("ziZhuTiYuCreateComboBox");
            var DsNameCnCreate = this.getView().byId("DsNameCnCreate");
            var DsNameEnCreate = this.getView().byId("DsNameEnCreate");
            var DsDomainCreate = this.getView().byId("DsDomainCreate");
            var DsSystemCreate = this.getView().byId("DsSystemCreate");
            var DsBusinessCreate = this.getView().byId("DsBusinessCreate");
            var DsTypeCreate = this.getView().byId("DsTypeCreate");
            var DsSecurityLevelCreate = this.getView().byId("DsSecurityLevelCreate");
            var DsOwnerCreate = this.getView().byId("DsOwnerCreate");
            var DsRelationshipCreate = this.getView().byId("DsRelationshipCreate");
            var EffectiveVilueCreate = this.getView().byId("EffectiveVilueCreate");
            var DsIsnullCreate = this.getView().byId("DsIsnullCreate");
            var DsDefaultCreate = this.getView().byId("DsDefaultCreate");
            var DsTechnicalTypeCreate = this.getView().byId("DsTechnicalTypeCreate");
            var DsTechnicalFromatCreate = this.getView().byId("DsTechnicalFromatCreate");
            var DsMappingTypeCreate = this.getView().byId("DsMappingTypeCreate");
            var DsMappingTableCreate = this.getView().byId("DsMappingTableCreate");
            var DsTableCodeCreate = this.getView().byId("DsTableCodeCreate");
            var EffectiveStatusCreate = this.getView().byId("EffectiveStatusCreate");
            var CreateDateCreate1 = this.getView().byId("CreateDateCreate1");
            var EffectiveDateCreate1 = this.getView().byId("EffectiveDateCreate1");
            var ExpiryDateCreate1 = this.getView().byId("ExpiryDateCreate1");
            var Memo1Create1 = this.getView().byId("Memo1Create1");
            var Memo2Create1 = this.getView().byId("Memo2Create1");
            var Memo3Create1 = this.getView().byId("Memo3Create1");
            
            
            var page = sap.ui.getCore().byId("idSplitApp").app.getPage("idBzglUpdate");
         	page.setModel(oModel,"newBiaoZhunUpdate");
         	
         	
         	
         	
    		var dialog = new sap.m.Dialog({
			title: '确认框',
			type: 'Message',
			content: new sap.m.Text({ text: '是否重置?' }),
			beginButton: new sap.m.Button({
				text: '是',
				press: function () {





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