var TodoController = {
	create : function(req,res){
			var todo = req.param('data');
			Todo.create({
				text : todo,
				createDate : new Date(),
				isDone : false
			}).done(function(err,user){
				if(err){
					res.send(err, 500);
				}
				res.json({ok: true, text: todo});
			});
	},
	destroy:function(req,res){

	},
	list: function(req,res){
		return res.json(Todo.find());
	},
	index: function(req, res){
		return res.view({
			'layout': null,
			'todos': todos
		});
	}
};

module.exports = TodoController;