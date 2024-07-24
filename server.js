const express = require("express")
//import express from "express"

const app = express()

const porta = 3333

 function mostraPorta (){
              console.log('Servidor criado e rodando na porta:', porta)
 }

app.listen(porta, mostraPorta)