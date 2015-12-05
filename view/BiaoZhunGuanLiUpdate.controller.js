sap.ui.controller("com.zhenergy.data.manager.view.BiaoZhunGuanLiUpdate", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiUpdate
*/
	onInit: function() {

	},
	onDelete:function(){
	   // var context = oEvent.getSource().getBindingContext();
    	       // var sPath =context.sPath;
    // 	var page = sap.ui.getCore().byId("idSplitApp").app.getPage("idBzglUpdate");
    // 	var oModel =page.getModel("newBiaoZhunUpdate");
    	var oModel =sap.ui.getCore().getModel("oModel");
    	var id = this.getView().byId("DsCodeUpdate").getText();
    	console.log(oModel);


    	var dialog = new sap.m.Dialog({
			title: '确认框',
			type: 'Message',
			content: new sap.m.Text({ text: '您确定删除吗?' }),
			beginButton: new sap.m.Button({
				text: '确认',
				press: function () {
                    oModel.remove("/EE_STANDARDSet('"+id+"')", {
                        success : jQuery.proxy(function() {
                            sap.ui.getCore().byId("idSplitApp").app.backToPage("idBzglQuery");
                                    var jModel = new sap.ui.model.json.JSONModel();
        var table = sap.ui.getCore().byId("biaoZhunQueryResult");
        var mParameters = {};
        mParameters['async'] = true;
        mParameters['success'] = jQuery.proxy(function(data) {
             console.log(data.results);
            jModel.setData({mataModel:data.results});
            table.setModel(jModel);
            // console.log(table);
        }, this);
        mParameters['error'] = jQuery.proxy(function(data) {
            sap.m.MessageToast.show("网络连接失败，请重试");
        }, this);
        var oModel1 = sap.ui.getCore().getModel("oModel");    
        oModel1.read("/EE_STANDARDSet?$filter=TypeId eq '"+shuJuBiaoZhunLeiBieQuery+"' and DsCode eq '"+shuJuXiangBianHaoQuery+"' and DsNameEn eq '' and DsNameCn eq '"+shuJuXiangMingChengQuery+"' and DomainId eq '"+zhuTiYuQuery+"' and SecurityLevelId eq '"+shuJuAnQuanFenJiQuery+"' and EffectiveStatusId eq '"+shiFouYouXiaoQuery+"'",mParameters);   // ?$filter=(Status eq 'READY' and TaskDefinitionName eq '请假申请审批')	
   
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