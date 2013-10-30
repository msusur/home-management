var todoHelper ={
	addTodo : function(todoText,$input){
		if($input){
			$input.focus().val('');
		}
		var $item = $("<li/>");
		$item.text(todoText);
		$item.appendTo("#todo-list");
		$item.css("todo-item");
	},
	saveTodo: function(callback,$text){
		$.post('/todo/create',{data: $text.val()}).success(function(result){
					if(result && result.ok){
						callback(result);
					}
			});
	},
	doneTodo: function(obj){
		return $.post('/todo/done', obj)
	},
	init : function($){
		$('#save-todo').click(function(){
			var $text = $('#todoText');
			todoHelper.saveTodo(function(result){
				todoHelper.addTodo(result.text, $text);
			}, $text);
		});
		$("#todo-list").on("click","li",function(){
			var $this = $(this);
			todoHelper.doneTodo($this).success(function(){
			});
		});
		$(document).ready(function(){
			$.get("/todo/list").success(function(result){
				if(result && $.isArray(result){
					for(var i=0; i<result.length; i+=1){
						todoHelper.addTodo(result[i].text);
					}
				});
			});
		});
	}
};
(function($){
	todoHelper.init($);
})(window.jQuery);