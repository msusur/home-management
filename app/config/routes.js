module.exports.routes = {
  '/': {
    controller: 'Home',
    action: 'index'
  },
  'post /todo/create' : {
    controller: 'Todo',
    action:'create'
  },
  '/todo/list':{
    controller: 'Todo',
    action: 'index'
  },
  '/notes/all':{
    view: 'notes/all'
  }
};