
var http = require('http');
var url  = require('url')
var fs = require('fs');

function readFile(response,file) {
	
	fs.readFile(file, function(err, data) {
		response.end(data);
	});
}

function callback(request, response) {

	response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

	var parts = url.parse(request.url);
	var path = parts.path;

	if (path == '/') {
    response.writeHead(200, 'Content-type', 'text/plain');
	response.end('Coloque uma rota')


		readFile(response,"Categoria.json");
	} else if (path == '/categoria') {  
		readFile(response,"Categoria.json");
	} else if (path == '/pedidos') {  
		readFile(response,"Pedidos.json");
	 } else if (path == '/produtos') {
		readFile(response,"Produtos.json");
	  } else if (path == '/clientes'){
		readFile(response,"Clientes.json");
	  }
	  
	 
	  else {
    response.writeHead(404, {'content-type': 'text/plain'})
		response.end("Path não mapeado: " + path);
	}
}
var server = http.createServer(callback);

const port = 3000;
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000/");