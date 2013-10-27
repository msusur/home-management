(function (io) {
  var socket = io.connect();
  if (typeof console !== 'undefined') {
    log('Connecting to Sails.js...');
  }
  socket.on('connect', function socketConnected() {
    socket.on('message', function messageReceived(message) {
      log('New comet message received :: ', message);
    });

    log('Socket is now connected and globally accessible as `socket`.\n' + 
        'e.g. to send a GET request to Sails, try \n' + 
        '`socket.get("/", function (response) ' +
        '{ console.log(response); })`');
  });
  window.socket = socket;
  function log () {
    if (console) {
      console.log.apply(console, arguments);
    }
  }
})(window.io);