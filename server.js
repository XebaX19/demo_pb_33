const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));

app.get('/mensaje', (req, res) => {
    res.send('Hola a todos desde Heroku!');
});

const server = app.listen(PORT, () => {
    console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});

server.on('error', (err) => {
    console.log(`Error en el servidor => ${err}`);
});