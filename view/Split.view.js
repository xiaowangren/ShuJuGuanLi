sap.ui.jsview("com.zhenergy.data.manager.view.Split", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.zhenergy.data.manager.view.Split
	*/ 
	getControllerName : function() {
		return "com.zhenergy.data.manager.view.Split";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.zhenergy.data.manager.view.Split
	*/ 
	createContent : function(oController) {
		this.app = new sap.m.SplitApp({
		});
		//注册master主页面
	    var masterPage = sap.ui.view({
			id: "idMaster",
			viewName: "com.zhenergy.data.manager.view.MyMaster",
			type: sap.ui.core.mvc.ViewType.JS
		});
		masterPage.addStyleClass("master_width");
		this.app.addMasterPage(masterPage);
		//注册welcome
		var welcomePage = sap.ui.view({
			id: "idWelcome",
			viewName: "com.zhenergy.data.manager.view.Welcome",
			type: sap.ui.core.mvc.ViewType.XML
		});
		this.app.addDetailPage(welcomePage);
		//注册数据标准管理查询页面
		var bzglQuery = sap.ui.view({
			id: "idBzglQuery",
			viewName: "com.zhenergy.data.manager.view.BiaoZhunGuanLiQuery",
			type: sap.ui.core.mvc.ViewType.XML
		});
		this.app.addDetailPage(bzglQuery);
		//注册数据标准管理创建页面
		var bzglCreate = sap.ui.view({
			id: "idBzglCreate",
			viewName: "com.zhenergy.data.manager.view.BiaoZhunGuanLiCreate",
			type: sap.ui.core.mvc.ViewType.XML
		});
		this.app.addDetailPage(bzglCreate);
		//注册数据标准管理更新页面
		var bzglUpdate = sap.ui.view({
			id: "idBzglUpdate",
			viewName: "com.zhenergy.data.manager.view.BiaoZhunGuanLiUpdate",
			type: sap.ui.core.mvc.ViewType.XML
		});
		this.app.addDetailPage(bzglUpdate);
		//注册数据质量管理查询页面
		var zlglQuery = sap.ui.view({
			id: "idZlglQuery",
			viewName: "com.zhenergy.data.manager.view.ZhiLiangGuanLiQuery",
			type: sap.ui.core.mvc.ViewType.XML
		});
		this.app.addDetailPage(zlglQuery);
		//注册数据质量管理创建页面
		var zlglCreate = sap.ui.view({
			id: "idZlglCreate",
			viewName: "com.zhenergy.data.manager.view.ZhiLiangGuanLiCreate",
			type: sap.ui.core.mvc.ViewType.XML
		});
		this.app.addDetailPage(zlglCreate);
		//注册数据质量管理更新页面
		var zlglUpdate = sap.ui.view({
			id: "idZlglUpdate",
			viewName: "com.zhenergy.data.manager.view.ZhiLiangGuanLiUpdate",
			type: sap.ui.core.mvc.ViewType.XML
		});
		this.app.addDetailPage(zlglUpdate);
		
		this.app.toMaster("idMaster");
		this.app.toDetail("idWelcome");
		return this.app;
	}

});