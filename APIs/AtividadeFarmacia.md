Olá!
Para criar essa atividade consute sua própria modelagem com as propriedades fornecidas [aqui](https://github.com/iurisaints/talentosTI/blob/main/Banco%20de%20Dados/atividade1MER.md)
E as modelagens estão (aqui)[https://www.bit.ly/senacmanha1]
Agora comece a criar sua API, a estrutura básica é:
**Iniciar o NPM no projeto**
```
npm init
```
Criar um novo arquivo chamado **index.js**.
**Instalar o Express.js**
```
npm install express
```
Após isso, você irá também baixar o Nodemon:
```
npm install nodemon
```
E configurar o package.json, que ficará assim:
```
{
  "name": "apis",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon ./index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "nodemon": "^3.0.1"
  }
}
```
Agora é hora de organizar seu index.js, a configuração padrão é:
```
const express = require('express');
const server = express();
const dados = require('./src/data/dados.json');

server.get('/', (req, res) => {
    return res.json({mensagem: 'Nossa API está funcionando'});
});
server.listen(3000, () =>{
    console.log("Servidor está funcionando!");
});
```

Agora é com você!!! Crie seu .JSON com as entidades da modelagem!
