/*var hapi = require('hapi');
//var server = new hapi.Server();
const server=hapi.server({
    host:'localhost',
    port:8000
});
server.route(
  {
    method:'GET',
    path:'/',
    handler: function(request,reply){
    return 'It is Working';
    }
  }
);
server.start( function(){
  console.log('Server is running');
}
);*/
var Hapi = require('hapi'),
    Routes = require('./routes'),
    config = require('./config'),
    Db = require('./database');
var server = Hapi.createServer(config.server.host, config.server.port, {
    cors: true
});
server.route(Routes.endpoints);
server.start(function() {
    console.log('Server started ', server.info.uri);
});
