var io = require('socket.io').listen(8000);

io.sockets.on('connection', function(socket) {
  socket.on('message', function(message) {
    io.sockets.emit('pageview', { 'url': message });
  });
});
