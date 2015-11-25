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
        var oModel = this.getView().getModel();
        //是否提交
            var dialog = new sap.m.Dialog({
				title: '确认框',
				type: 'Message',
				content: new sap.m.Text({ text: '是否保存?' }),
				beginButton: new sap.m.Button({
					text: '确认',
					press: function () {
                        oModel.create("/",newBiaoZhun, {
                            success : jQuery.proxy(function() {
                                // sap.ui.getCore().byId("idSplitApp").app.backToPage("idPersonInfo");
                                // this.initializeData();
                                // jQuery.sap.require("sap.m.MessageToast");
                                sap.m.MessageToast.show("数据标准新增成功");
                            }, this),
                            error : jQuery.proxy(function() {
                                sap.m.MessageToast.show("数据标准新增失败");
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
    onChongZhiBiaoZhun: function(){
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

            var dialog = new sap.m.Dialog({
				title: '确认框',
				type: 'Message',
				content: new sap.m.Text({ text: '是否重置?' }),
				beginButton: new sap.m.Button({
					text: '是',
					press: function () {
					   // console.log(oEvent);
					   // this.initializeData();
                        DsNameCnCreate.setValue();
                        DsNameEnCreate.setValue();
                        DsDomainCreate.setSelectedKey("999");
                        DsSystemCreate.setValue();
                        DsBusinessCreate.setValue();
                        DsTypeCreate.setSelectedKey("999");
                        DsSecurityLevelCreate.setSelectedKey("999");
                        DsOwnerCreate.setValue();
                        DsRelationshipCreate.setValue();
                        EffectiveVilueCreate.setValue();
                        DsIsnullCreate.setSelectedKey("999");
                        DsDefaultCreate.setValue();
                        DsTechnicalTypeCreate.setSelectedKey("999");
                        DsTechnicalFromatCreate.setValue();
                        DsMappingTypeCreate.setSelectedKey("999");
                        DsMappingTableCreate.setValue();
                        DsTableCodeCreate.setValue();
                        EffectiveStatusCreate.setSelectedKey("999");
                        CreateDateCreate1.setValue();
                        EffectiveDateCreate1.setValue();
                        ExpiryDateCreate1.setValue();
                        Memo1Create1.setValue();
                        Memo2Create1.setValue();
                        Memo3Create1.setValue();
                        combobox.removeAllItems();
                        combobox.addItem(new sap.ui.core.ListItem({text:"",key:"999"}));
                        combobox.setSelectedKey("999");
                        combobox.removeAllItems();
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
    onChangeZhuTiYu:function(oEvent){
        var context = oEvent.oSource.getSelectedKey();
        this.drawComboBoxItemBz(context);
    },
    drawComboBoxItemBz: function(key){
        // var cell = this.getView().byId("ziZhuTiYuCreate");
        // var newBiaoZhun = this.getView().getModel("newBiaoZhun").getData().Detail;
        var combobox = this.getView().byId("ziZhuTiYuCreateComboBox");

        combobox.removeAllItems();
        if("001"==key){
            combobox.addItem(new sap.ui.core.ListItem({text:"请选择子主题域",key:"999"}));
            combobox.addItem(new sap.ui.core.ListItem({text:"物料基本信息",key:"001"}));
            combobox.setSelectedKey("999");
        }
        if("002"==key){
            combobox.addItem(new sap.ui.core.ListItem({text:"请选择子主题域",key:"999"}));
            combobox.addItem(new sap.ui.core.ListItem({text:"财务基本信息",key:"002"}));
            combobox.setSelectedKey("999");
        }
        if("003"==key){
            combobox.addItem(new sap.ui.core.ListItem({text:"请选择子主题域",key:"999"}));
            combobox.addItem(new sap.ui.core.ListItem({text:"人事基本信息",key:"003"}));
            combobox.setSelectedKey("999");
        }
        if("004"==key){
            combobox.addItem(new sap.ui.core.ListItem({text:"请选择子主题域",key:"999"}));
            combobox.addItem(new sap.ui.core.ListItem({text:"销售基本信息",key:"004"}));
            combobox.setSelectedKey("999");
        }
        if("005"==key){
            combobox.addItem(new sap.ui.core.ListItem({text:"请选择子主题域",key:"999"}));
            combobox.addItem(new sap.ui.core.ListItem({text:"客户基本信息",key:"005"}));
            combobox.setSelectedKey("999");
        }
        if("006"==key){
            combobox.addItem(new sap.ui.core.ListItem({text:"请选择子主题域",key:"999"}));
            combobox.addItem(new sap.ui.core.ListItem({text:"供应商基本信息",key:"006"}));
            combobox.setSelectedKey("999");
        }
        if("007"==key){
            combobox.addItem(new sap.ui.core.ListItem({text:"请选择子主题域",key:"999"}));
            combobox.addItem(new sap.ui.core.ListItem({text:"设备基本信息",key:"007"}));
            combobox.setSelectedKey("999");
        }
        if("008"==key){
            combobox.addItem(new sap.ui.core.ListItem({text:"请选择子主题域",key:"999"}));
            combobox.addItem(new sap.ui.core.ListItem({text:"设备分类基本信息",key:"008"}));
            combobox.setSelectedKey("999");
        }
        if("009"==key){
            combobox.addItem(new sap.ui.core.ListItem({text:"请选择子主题域",key:"999"}));
            combobox.addItem(new sap.ui.core.ListItem({text:"设备特性基本信息",key:"009"}));
            combobox.setSelectedKey("999");
        }
        if("010"==key){
            combobox.addItem(new sap.ui.core.ListItem({text:"请选择子主题域",key:"999"}));
            combobox.addItem(new sap.ui.core.ListItem({text:"功能位置基本信息",key:"010"}));
            combobox.setSelectedKey("999");
        }
        if("011"==key){
            combobox.addItem(new sap.ui.core.ListItem({text:"请选择子主题域",key:"999"}));
            combobox.addItem(new sap.ui.core.ListItem({text:"科目基本信息",key:"011"}));
            combobox.setSelectedKey("999");
        }
        if("999"==key){
            combobox.addItem(new sap.ui.core.ListItem({text:"",key:"999"}));
            combobox.setSelectedKey("999");
            combobox.removeAllItems();
        }
    }
    // },
    // onSaveBiaoZhun:function(){
    //     var newBiaoZhun = this.getView().getModel("newBiaoZhun").getData().Detail;
    //     console.log(newBiaoZhun.DsSubdomain);
    // }
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