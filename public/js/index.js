var socket = io();

socket.on('connect', function (){
  console.log('connected to the server');

  socket.emit('createMessage', {
    to: 'prateek',
    text : 'something'
  });

});

socket.on('disconnect', function (){
  console.log('disconnected from the server');
});

socket.on('newMessage', function (Message){
  console.log('newMessage', Message);
});
