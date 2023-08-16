const http = require('http');
const fs = require('fs');
const port = 8088;

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Erro interno do servidor');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
