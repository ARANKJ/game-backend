const http = require ("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "aplication/json" });

    res.end(JSON.stringify({
        message: "servidor funcionando",
        ip: "127.0.0.1",
        port: "7777"
    }));
})

server.listen(3000, () => {
    console.log("Sevidor rodando. Porta: 3000")
});