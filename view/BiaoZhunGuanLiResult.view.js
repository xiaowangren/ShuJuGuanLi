sap.ui.jsview("com.zhenergy.data.manager.view.BiaoZhunGuanLiResult", {
	getControllerName : function() {
		return "com.zhenergy.data.manager.view.BiaoZhunGuanLiResult";
	},

	createContent : function(oController) {

        
	    var oTabStrip1 = new sap.ui.commons.TabStrip("TabStrip01");
        oTabStrip1.setHeight("405px");
	    var oTable2 = new sap.ui.table.Table({
	        id:"biaoZhunQueryResult",
	        visibleRowCount: 10,
        	selectionMode: sap.ui.table.SelectionMode.Single,
        	navigationMode: sap.ui.table.NavigationMode.Paginator,
        	fixedColumnCount: 0,
        	rowSelectionChange:function(oEvent){
        	    var rowContext = oEvent.getParameters().rowContext;
        		sap.ui.getCore().byId("idSplitApp").app.to("idBzglUpdate", rowContext);
        		var page = sap.ui.getCore().byId("idSplitApp").app.getPage("idBzglUpdate");
         	    page.setBindingContext(rowContext);
        	    console.log(rowContext);
        	}
        	
        }); 
	    oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项编号"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "EducationType"),
        	width: "100px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项英文名称"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "yingwen"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项中文名称"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "zhongwen"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "所属主题域"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "zhutiyu"),
        	width: "100px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "所属子主题域"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "zizhutiyu"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "来源应用系统"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项业务定义"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "150px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据标准类别"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据安全级别"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据标准责任人"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "150px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "相关数据运算关系"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "150px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "有效域值"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "150px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "可否空值"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "150px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "默认值"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "150px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据的技术类型"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "150px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "映射类型"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "100px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "映射表"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "100px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "引用代码标准"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "是否有效"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "100px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "创建日期"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "生效日期"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "失效日期"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "120px",
        	hAlign: "Center"
        }));
	   // var oModel = new sap.ui.model.json.JSONModel();
	   // oModel.setData({modelData: aData});
    //     oTable2.setModel(oModel);
        // oTable2.bindRows("/EE_EDUCATION_SET");
        var tab = new sap.ui.commons.Tab({
            verticalScrolling:sap.ui.core.Scrolling.Hidden,
            horizontalScrolling:sap.ui.core.Scrolling.Hidden,
            text:"数据标准查询结果",
            content:oTable2
        }); 
        oTabStrip1.addTab(tab);
		return oTabStrip1;
	}

});