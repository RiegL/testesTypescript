"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var produtoRoute = require("./module/produto/produto.model");
var app = express();
app.use(express.json());
app.use('/produto', produtoRoute);
app.listen(8080, function () {
    console.log('Servidor funcionando!!');
});
