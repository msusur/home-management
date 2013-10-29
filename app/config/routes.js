module.exports.routes = {

  '/': {
    view: 'home/index'
  },
  'post /todo/create' : {
    controller: 'Todo',
    action:'create'
  },
  '/todo/all':{
    view: 'todo/all'
  },
  '/notes/all':{
    view: 'notes/all'
  }
};