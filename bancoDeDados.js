const mongoose = require ('mongoose')
require('dotenv').config()


async function connectaBancoDeDados(){  //função que vai ser lida de forma assíncrona 
              try {
                            console.log('Conexão com o banco de dados se iniciou!')

                            await mongoose.connect(process.env.MONGO_URL)//o usuário espera a conexão enquanto o restante dos clients são atendidos

                            console.log('Conexão feita com sucesso!') //msg de sucesso de conexão
              } catch(erro){
                            console.log(erro)
              }
}

module.exports = connectaBancoDeDados