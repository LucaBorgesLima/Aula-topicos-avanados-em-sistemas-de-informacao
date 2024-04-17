var http = require("http");

var info = require('./aula02');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Primeiro nome: "+ info.Nome + " ");
    res.write("Ultimo nome: "+ info.ultimo + " ");
    res.write("RGM: "+ info.rgm + " ");
    res.end();
}).listen(1716);

