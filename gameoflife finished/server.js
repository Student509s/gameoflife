// var express = require('Express');
// var app = express();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);
// var messages = [];

// app.use(express.static("."));
// app.get('/', function (req, res) {
//    res.redirect('index.html');
// });
// io.on('connection', function (socket) {
//     for(var i in messages) {
//       io.sockets.emit("display message", messages[i]);
//     }
//     socket.on("send message", function (data) {
//         messages.push(data);
//         io.sockets.emit("display message", data);
//     });
//  });
 
// server.listen(3000);



// function main() {
//     var socket = io();
//     var chatDiv = document.getElementById('Chat');
//     var input = document.getElementById('Nachricht');
//     var button = document.getElementById('Senden');
 
//     function handleSubmit(evt) {
//         var val = input.value;
//         if (val != "") {
//             socket.emit("send message", val);
//         }
//     }
//     button.onclick = handleSubmit;
 
//     function handleMessage(msg) {
//         var p = document.createElement('p');
//         p.innerText = msg;
//         chatDiv.appendChild(p);
//         input.value = "";
// }

// socket.on('display message', handleMessage);
// } // main closing bracket

// window.onload = main; 