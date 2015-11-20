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
	    
	    	    var aData = [
{num:"1",yingwen:"EQUI_CODE",zhongwen:"设备编码",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"2",yingwen:"EQUI_DESC",zhongwen:"设备描述",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"3",yingwen:"EQUI_STATUS",zhongwen:"设备状态",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"4",yingwen:"MADE_BY",zhongwen:"制造商",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"5",yingwen:"PIC_NO",zhongwen:"图号",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"6",yingwen:"INSTALL_PLA",zhongwen:"安装地点",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"7",yingwen:"WEIGHT",zhongwen:"重量",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"8",yingwen:"EQUI_CLAS",zhongwen:"设备分类",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"9",yingwen:"UNIT",zhongwen:"重量单位",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"10",yingwen:"SERIAL_NO",zhongwen:"序列号",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"11",yingwen:"SPECIFICATION",zhongwen:"规格",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"1",yingwen:"EQUI_CODE",zhongwen:"设备编码",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"2",yingwen:"EQUI_DESC",zhongwen:"设备描述",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"3",yingwen:"EQUI_STATUS",zhongwen:"设备状态",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"4",yingwen:"MADE_BY",zhongwen:"制造商",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"5",yingwen:"PIC_NO",zhongwen:"图号",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"6",yingwen:"INSTALL_PLA",zhongwen:"安装地点",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"7",yingwen:"WEIGHT",zhongwen:"重量",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"8",yingwen:"EQUI_CLAS",zhongwen:"设备分类",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"9",yingwen:"UNIT",zhongwen:"重量单位",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"10",yingwen:"SERIAL_NO",zhongwen:"序列号",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"11",yingwen:"SPECIFICATION",zhongwen:"规格",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
{num:"12",yingwen:"PROFESS",zhongwen:"专业",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"}
        ];
        
		//1.TAB
		var oTabStrip1 = new sap.ui.commons.TabStrip("TabStrip02");
		oTabStrip1.setHeight("405px");
		var oTable2 = new sap.ui.table.Table({
	        id:"zhiLiangQueryResult",
	        visibleRowCount: 10,
        	selectionMode: sap.ui.table.SelectionMode.Single,
        	navigationMode: sap.ui.table.NavigationMode.Paginator,
        	fixedColumnCount: 0
        	
        }); 
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "规则检查编号"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "num"),
        	width: "120px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项类型"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "yingwen"),
        	width: "120px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "系统"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "zhongwen"),
        	width: "80px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项类型英文名称"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "zhutiyu"),
        	width: "150px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项类型中文名称"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "zizhutiyu"),
        	width: "150px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项英文名称"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项中文名称"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "150px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据项描述"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据质量检查维度"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "150px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "规则描述"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "150px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "数据质量责任人"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "检查频度"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "120px",
        	hAlign: "Center"
        }));
        oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "检查频度的日期"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "150px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "是否有效"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "120px",
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
        	width: "150px",
        	hAlign: "Center"
        }));
		oTable2.addColumn(new sap.ui.table.Column({
        	label: new sap.ui.commons.Label({text: "失效日期"}),
        	template: new sap.ui.commons.TextView().bindProperty("text", "xitong"),
        	width: "150px",
        	hAlign: "Center"
        }));
		
		var oModel = new sap.ui.model.json.JSONModel();
	    oModel.setData({modelData: aData});
        oTable2.setModel(oModel);
        oTable2.bindRows("/modelData");
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