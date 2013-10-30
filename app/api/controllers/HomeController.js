var HomeController = {
	index : function(req,res){
		return res.view({
			menuItems : [
							{link:'#todo', transition:'slide', id:'todoMenu',text:'Show me todo list!'},
							{link:'#notes', transition:'slide', id:'notesMenu',text:'Show me notes!'},
						]
		});
	}
};

module.exports = HomeController;