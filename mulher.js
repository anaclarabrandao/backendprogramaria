const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres =[
              {
                            nome: 'Ana Clara Brandão',
                            imagem: 'https://media.licdn.com/dms/image/D4D03AQEwUVKj8bN8Kg/profile-displayphoto-shrink_400_400/0/1689680249375?e=1724284800&v=beta&t=B5E3ljeXIZnE9bEJrXR5v6ID-mi4n-qQrBJbv2dzfjY',
                            minibio: 'Desenvolvedora python em formação.'
              },
              {
                            nome: 'Simara Conceição',
                            imagem: 'https://media.licdn.com/dms/image/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_400_400/0/1563116727359?e=1724284800&v=beta&t=-3-yuka1magw0J9iSdFyRLJ_j2OctcQ9YzIidac8NB0',
                            minibio: 'Desenvolvedora e instrutora'
              },
              {
                            nome: 'Nina da Hora',
                            imagem: 'https://ogimg.infoglobo.com.br/in/24599691-04f-26c/FT1086A/89162800_El-Nina-da-Hora.jpg',
                            minibio: 'Hacker antiracista'
              }
]

function mostraMulheres (request, response){
              response.json(mulheres)
}

function mostraPorta(){
              console.log("Servidor na porta", porta)
}

app.use(router.get('/mulher', mostraMulheres))

app.listen(porta, mostraPorta)
