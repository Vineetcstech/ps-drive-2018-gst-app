var mysql = require('mysql');

 config = require('./config');

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
       reply=rows[0].solution;
     });
   }
 }
