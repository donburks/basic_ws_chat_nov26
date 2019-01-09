const ws = require('ws');

const wss = new ws.Server({port: 3001});

wss.broadcast = function(data) {
  wss.clients.forEach(sock => {
    if (sock.readyState === ws.OPEN) {
      sock.send(data);
    } else {
      sock.terminate();
    }
  });
}

wss.on('connection', (socket, req) => {
  console.log(req.connection.remoteAddress);
  socket.on('message', wss.broadcast);
});
