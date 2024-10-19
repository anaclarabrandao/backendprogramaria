const express = require("express") // inicio do express
const router = express.Router() //primeira parte da rota
const cors = require('cors') //trás o pacote cors para consumo de API no front-end

router.patch('/mulher/:id', corrigeMulher)

const connectaBancoDeDados = require('./bancoDeDados') //ligo o banco de dados pelo arquivo bancoDeDados
connectaBancoDeDados() //chamo a função de DB

const Mulher = require('./mulherModel')// trás o modelo de objeto mulher

const app = express() //início do app
app.use(express.json())//configura o trafego de arquivos no formato json
app.use(cors())
const porta = 3333 // cria porta

//GET ligado ao banco e usando o modelo de objeto de mulher mulherModel.js
async function mostraMulheres (request, response){
              try{
                            const mulheresVindasDoBancoDeDados = await Mulher.find()

                            response.json(mulheresVindasDoBancoDeDados)

              }catch (erro){
                            console.log(erro)
              }
}


//POST
async function criaMulher (request, response) {
              const novaMulher = new Mulher({
                            nome: request.body.nome,
                            imagem: request.body.imagem,
                            citacao: request.body.citacao,
                            minibio: request.body.minibio
              })

              try {
                            const mulherCriada = await novaMulher.save()
                            response.status(201).json(mulherCriada)
              } catch (erro){
                            console.log(erro)
              }

}

//PATCH - para editar valor das chaves nome, imagem e minibio
async function corrigeMulher (request, response){
              //
              try {
                            const mulherEncontrada = await Mulher.findById(request.params.id)

                            //casos que se pode modificar no objeto os pares de chave e valor
                            if (request.body.nome){
                                          mulherEncontrada.nome = request.body.nome
                            }
                            if (request.body.imagem){
                                          mulherEncontrada.imagem = request.body.imagem
                            }
                            if (request.body.citacao){
                                          mulherEncontrada.citacao = request.body.citacao
                            }
                            if (request.body.minibio){
                                          mulherEncontrada.minibio = request.body.minibio
                            }
                            const mulherAtualizadaNoBancoDeDados = await  mulherEncontrada.save()
                            
                            response.json(mulherAtualizadaNoBancoDeDados)
              } catch (erro){
                            console.log(erro)
              }

}

//DELETE - para deletar um objeto no array mulheres
async function deletaMulher (request, response){
              try {
                            await Mulher.findByIdAndDelete(request.params.id)
              
                            response.json({messagem: 'Mulher deletada com sucesso!'})              
              } catch(erro){
                            console.log(erro)
              }
              
              
}

//porta
function mostraPorta(){
              console.log("Servidor na porta", porta)
}

app.use(router.get('/mulher', mostraMulheres)) //configura rota GET /mulher

app.use(router.post('/mulher', criaMulher)) // configura rota POST /mulher

app.use(router.patch('/mulher/:id', corrigeMulher)) // configura rota PATCH /mulher:id

app.use(router.delete('/mulher/:id', deletaMulher)) // configura rota DELETE /mulher:id

app.listen(porta, mostraPorta) //replica porta para servidor