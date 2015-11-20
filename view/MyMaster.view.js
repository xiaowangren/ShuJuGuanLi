sap.ui.jsview("com.zhenergy.data.manager.view.MyMaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.zhenergy.data.manager.view.MyMaster
	*/ 
	getControllerName : function() {
		return "com.zhenergy.data.manager.view.MyMaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.zhenergy.data.manager.view.MyMaster
	*/ 
	createContent : function(oController) {
	    //create the Tree control
		var oTree = new sap.ui.commons.Tree("tree");
		oTree.setShowHeader(false);
		oTree.setTitle("Explorer");
		oTree.setWidth("100%");
		oTree.setHeight("auto");
		oTree.setShowHeaderIcons(true);
		oTree.setShowHorizontalScrollbar(true);

		//create Tree Nodes
		var oNode1 = new sap.ui.commons.TreeNode("node1", {text:"数据管控", icon:"sap-icon://open-folder", expanded: true});
		var oNode2 = new sap.ui.commons.TreeNode("node2", {text:"数据标准管理", icon:"sap-icon://open-folder",expanded: true});
		var oNode3 = new sap.ui.commons.TreeNode("node3", {text:"查询", icon:"sap-icon://attachment-text-file",selected:oController.onShuJuBiaoZhunGuanLiQuery});
		var oNode4 = new sap.ui.commons.TreeNode("node4", {text:"新增", icon:"sap-icon://attachment-text-file",selected:oController.onShuJuBiaoZhunGuanLiCreate});
// 		var oNode5 = new sap.ui.commons.TreeNode("node5", {text:"更新", icon:"images/disk.gif",selected:oController.onShuJuBiaoZhunGuanLiUpdate});
		var oNode6 = new sap.ui.commons.TreeNode("node6", {text:"数据质量管理", icon:"sap-icon://open-folder",expanded: true});
        var oNode7 = new sap.ui.commons.TreeNode("node7", {text:"查询", icon:"sap-icon://attachment-text-file",selected:oController.onShuJuZhiLiangGuanLiQuery});
        var oNode8 = new sap.ui.commons.TreeNode("node8", {text:"新增", icon:"sap-icon://attachment-text-file",selected:oController.onShuJuZhiLiangGuanLiCreate});
// 		var oNode9 = new sap.ui.commons.TreeNode("node9", {text:"更新", icon:"images/disk.gif",selected:oController.onShuJuZhiLiangGuanLiUpdate});
		oNode1.addNode(oNode2);
		oNode1.addNode(oNode6);
        oNode2.addNode(oNode3);
        oNode2.addNode(oNode4);
        // oNode2.addNode(oNode5);
        oNode6.addNode(oNode7);
        oNode6.addNode(oNode8);
        // oNode6.addNode(oNode9);
		//add Tree Node root to the Tree
		oTree.addNode(oNode1);
	    var panel = new sap.m.Panel({
	        height:'720px',
			content: [
				oTree
			]
		});
		return panel;
	}

});