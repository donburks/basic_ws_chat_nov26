$(function() {
  const socket = new WebSocket("ws://localhost:3001");

  socket.onmessage = function(msg) {
    $("<p>").text(msg.data).appendTo("#output");
  };

  $("#chat").on('keyup', function(e) {
    if (e.keyCode === 13) {
      const msg = $(this).val();
      socket.send(msg);
    }
  });
});

