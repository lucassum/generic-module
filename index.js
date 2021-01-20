const express = require('express')
const { loadAll } = require('./src/config/autoloader')
const app = express()
const port = 3000

app.use(express.json())

loadAll(app,'src','modules')

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))