const http = require('http');
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());

const routes = require('./routes.js');
app.use(express.static("public"));
app.use("/api/productos", routes)


app.get("/", (req, res) => {
   res.sendFile(__dirname + "/index.html");
})

const server = http.createServer(app);

server.listen(port, () => {
   console.log(`Aplicación ejecutandose en el puerto: ${port}`);
});
