var hapi = require('hapi');
var mysql = require('mysql');
var connection = mysql.createConnection(
  {
    host          : 'localhost',
    user          : 'vineet',
    password      : '',
    database      : 'psproject',
    insecureAuth  : true
  });
const server=hapi.server({
    host:'localhost',
    port:8000
});
connection.connect();
server.route(
  {
    method:'GET',
    path:'/',
    handler: function(request,reply){
    connection.query('select 1+1 as solution',function(err,rows,fields){
    if(err)
      {
        throw err;
      }
      console.log('The solution is: '+rows[0].solution);
      //reply=rows[0].solution;
    });
    return reply.file('./client/src/index.html') ;
    }
  });
server.start( function(){
  console.log('Server is running');
});
