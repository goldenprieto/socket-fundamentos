var socket = io();
// los on son para escuchar 
socket.on('connect',function(){
    console.log('Conectado al servidor');
   
});

socket.on('disconnect',function(){
    console.log('Se perdio Coneccion con el Servidor');
});    
// los emit son para enviar informacion
socket.emit('enviarMensaje',{
    usuario : 'Arles',
    mensaje : 'Hola mundo'
},function(resp){
   console.log('Respuesta del Server', resp)
});
//Escuchar eventos 
socket.on('enviarMensaje',function(mensaje){
        console.log('Servidor ',mensaje)
    });