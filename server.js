/**
 * Created by alfonsonoriega on 29/5/16.
 */

var http = require("http");

function onRequest( request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8888);
