const express = require('express')
const { loadAll } = require('./src/config/autoloader')
const swagger = require('./src/config/swagger')

const app = express()
swagger(app, __dirname)

const port = 3000

app.use(express.json())

loadAll(app, 'src', 'modules')

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))