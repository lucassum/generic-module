const mongoose = require('mongoose')
mongoose.connect(
  'mongodb://localhost:27017/generic_module',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    dbName: 'generic'
  },
  (error) => {
    if (error)
      console.log('Falha na inicialização do Mongoose. Erro: ', error.message)
    else console.log('Mongoose iniciado com sucesso')
  }
)
module.exports = mongoose
