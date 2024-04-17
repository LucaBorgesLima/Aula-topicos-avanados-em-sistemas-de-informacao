var http = require('http');
var request = require('request');

function iniciadoSistemaEcommerce() {
    return "sistema de ecommerce (monolito)";
}

function acionaModuloCatalogo() {
    return "catalogo(modulo)";
}

function acionaMicroServicoConsulta(callback) {
    request('http://localhost:8081', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            callback(body);
        }
    });
}

function acionaComponenteAntiFraude() {
    return "componente anti-fraude(componente)";
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var Sequencia = iniciadoSistemaEcommerce() +
        '==>' + acionaModuloCatalogo() +
        '==>' + acionaComponenteAntiFraude();

    res.write(Sequencia);

    acionaMicroServicoConsulta(function (microServico) {
        res.end("\n\nmicroservico de localizacao do ecommerce: " + microServico);
    });

}).listen(8063);


var httpMicroServico = require('http').createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("microservico de localizacao do ecommerce");
}).listen(8073);
