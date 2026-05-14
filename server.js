const http = require ("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "aplication/json" });

    res.end(JSON.stringify({
        message: "servidor funcionando",
        status: "bom"
    }));
})

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log("Sevidor rodando. Porta " + port);
});