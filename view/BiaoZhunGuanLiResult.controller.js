sap.ui.controller("com.zhenergy.data.manager.view.BiaoZhunGuanLiResult", {
    

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiResult
*/
	onInit: function() {
//         	    var aData = [
// {num:"1",yingwen:"EQUI_CODE",zhongwen:"设备编码",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"2",yingwen:"EQUI_DESC",zhongwen:"设备描述",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"3",yingwen:"EQUI_STATUS",zhongwen:"设备状态",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"4",yingwen:"MADE_BY",zhongwen:"制造商",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"5",yingwen:"PIC_NO",zhongwen:"图号",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"6",yingwen:"INSTALL_PLA",zhongwen:"安装地点",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"7",yingwen:"WEIGHT",zhongwen:"重量",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"8",yingwen:"EQUI_CLAS",zhongwen:"设备分类",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"9",yingwen:"UNIT",zhongwen:"重量单位",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"10",yingwen:"SERIAL_NO",zhongwen:"序列号",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"11",yingwen:"SPECIFICATION",zhongwen:"规格",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"1",yingwen:"EQUI_CODE",zhongwen:"设备编码",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"2",yingwen:"EQUI_DESC",zhongwen:"设备描述",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"3",yingwen:"EQUI_STATUS",zhongwen:"设备状态",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"4",yingwen:"MADE_BY",zhongwen:"制造商",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"5",yingwen:"PIC_NO",zhongwen:"图号",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"6",yingwen:"INSTALL_PLA",zhongwen:"安装地点",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"7",yingwen:"WEIGHT",zhongwen:"重量",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"8",yingwen:"EQUI_CLAS",zhongwen:"设备分类",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"9",yingwen:"UNIT",zhongwen:"重量单位",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"10",yingwen:"SERIAL_NO",zhongwen:"序列号",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"11",yingwen:"SPECIFICATION",zhongwen:"规格",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"},
// {num:"12",yingwen:"PROFESS",zhongwen:"专业",zhutiyu:"设备",zizhutiyu:"设备基本信息",xitong:"MDM",yewudignyi:"该设备的设备基本信息",leibie:"主数据标准"}
//         ];
        
        
        
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiResult
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiResult
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.zhenergy.data.manager.view.BiaoZhunGuanLiResult
*/
//	onExit: function() {
//
//	}

});