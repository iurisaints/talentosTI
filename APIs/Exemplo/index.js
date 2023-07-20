const express = require('express');
const server = express();
const dados = require('./src/data/dados.json');

server.get('/', (req, res) => {
    return res.json({mensagem: 'Nossa API está funcionando'});
});

server.get('/usuarios', (req, res) => {
    return res.json(dados.Usuarios);
});

server.get('/cursos', (req, res) => {
    return res.json(dados.Cursos);
});

server.listen(3000, () =>{
    console.log("Servidor está funcionando!");
});