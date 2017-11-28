const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection',(socket) => {
  console.log('new user connected');

  socket.on('disconnect', ()=>{
    console.log('user disconnected');
  });
});

app.use(express.static(publicPath));

server.listen(port, ()=>{
  console.log(`server is running on port ${port}`);
});
