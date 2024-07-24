const express = require("express")
//import express from "express"
const router = express.Router()
const app = express()

const porta = 3333

function mostraOla(request, response){
              response.send("Eu sempre consigo tudo que eu quero!")
}


function mostraPorta (){
              console.log('Servidor criado e rodando na porta:', porta)
 }


app.use(router.get('/ola', mostraOla))
app.listen(porta, mostraPorta)