var io = require('socket.io').listen(9000);

io.sockets.on('connection', function(socket) {
  socket.on('message', function(message) {
    io.sockets.emit('pageview', { 'url': message });
  });
});
