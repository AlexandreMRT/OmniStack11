const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors()); //dentro do cors nos colocamos quem poder ter acesso a nossa API, como estamos em dev, sem problemas. Mas caso fosse www.meuapp.com, teriamos que colocar
app.use(express.json());
app.use(routes);


app.listen(3333);
