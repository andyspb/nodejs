/**
 * New node file
 */

function route(pathname, response) {
  console.log("About to route a request for " + pathname);
  
  response.writeHead(200, {"Content-Type": "text/plain"});
  if ( pathname == '/test') {
	  response.write("Hello TEST");
	  
  } else {
	  response.write("Hello World");
	  
  }
   
  response.end();
}


exports.route = route;