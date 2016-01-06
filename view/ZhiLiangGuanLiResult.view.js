sap.ui.jsview("com.zhenergy.data.manager.view.ZhiLiangGuanLiResult", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiResult
	*/ 
	getControllerName : function() {
		return "com.zhenergy.data.manager.view.ZhiLiangGuanLiResult";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.zhenergy.data.manager.view.ZhiLiangGuanLiResult
	*/ 
	createContent : function(oController) {
		//1.TAB
		var oTabStrip1 = new sap.ui.commons.TabStrip("TabStrip02");
		oTabStrip1.setHeight("405px");
		var oTable2 = new sap.ui.table.Table({
	        id:"zhiLiangQueryResult",
	        visibleRowCount: 10,
        	selectionMode: sap.ui.table.SelectionMode.Single,
        	navigationMode: sap.ui.table.NavigationMode.Paginator,
        	fixedColumnCount: 0
    //     	selectionBehavior:sap.ui.table.SelectionBehavior.Row,
    //     	rowSelectionChange:function(oEvent){
    //     	    var rowContext = oEvent.getParameters().rowContext;
    //      	    var table = sap.ui.getCore().byId("zhiLiangQueryResult");
    //      	    var model = table.getModel(); 
    //      	    var data  = model.getProperty(rowContext.sPath);
    //      	    sap.ui.getCore().byId("idSplitApp").app.to("idZlglUpdate", rowContext);
    //     		var page = sap.ui.getCore().byId("idSplitApp").app.getPage("idZlglUpdate");
    //     		var pinDu=0;
    //     		if(data.DqCheckFrequencyId=='M1'){
    //     		    pinDu=0;
    //     		}
    //     		if(data.DqCheckFrequencyId=='M2'){
    //     		    pinDu=1;
    //     		}
    //     		if(data.DqCheckFrequencyId=='M3'){
    //     		    pinDu=2;
    //     		}
    //     		if(data.DqCheckFrequencyId=='M4'){
    //     		    pinDu=3;
    //     		}
    //     		if(data.DqCheckFrequencyId=='M5'){
    //     		    pinDu=4;
    //     		}
    //     		if(data.DqCheckFrequencyId=='M6'){
    //     		    pinDu=5;
    //     		}
    //     // 		data["pinDu"]=pinDu;
    //             data.DqCheckFrequencyId=pinDu;
    //     		var oModel = new sap.ui.model.json.JSONModel(data);
			 //   page.setModel(oModel,"newZhiLiangUpdate");
         	    
    //     	}
        }); 
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "操作"}),
        	template: new sap.ui.commons.Button({text : "修改",press : oController.handleDetailsPress}),
        	width: "100px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "规则检查编号"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "RullNo"),
        	width: "120px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项类型"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "DqType"),
        	width: "120px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "系统"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "DqSystem"),
        	width: "80px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项类型英文名称"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "ItemTypeNameEn"),
        	width: "150px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项类型中文名称"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "ItemTypeNameCn"),
        	width: "150px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项英文名称"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "ItemNameEn"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项中文名称"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "ItemNameCn"),
        	width: "150px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项描述"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "ItemDescribation"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据质量检查维度"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "DqDimentation"),
        	width: "150px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "规则描述"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "RullDescribation"),
        	width: "150px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据质量责任人"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "DqOwner"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "检查频度"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "DqCheckFrequency"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "检查频度的日期"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "DqCheckDate"),
        	width: "150px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "是否有效"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "EffectiveStatus"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "创建日期"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "CreateDate"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "生效日期"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "EffectiveDate"),
        	width: "150px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "失效日期"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "ExpiryDate"),
        	width: "150px",
        	hAlign: "Center"
        }));
		
// 		var oModel = new sap.ui.model.json.JSONModel();
// 	    oModel.setData({modelData: aData});
//         oTable2.setModel(oModel);
        oTable2.bindRows("/mataModelZhiLiang");
        var tab = new sap.ui.commons.Tab({
            verticalScrolling:sap.ui.core.Scrolling.Hidden,
            horizontalScrolling:sap.ui.core.Scrolling.Hidden,
            text:"数据质量查询结果",
            content:oTable2
        }); 
        oTabStrip1.addTab(tab);
		return oTabStrip1;
	
	}

});