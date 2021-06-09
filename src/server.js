const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
require('./controllers/authControllers')(app)
require('./controllers/coreControllers')(app)



app.listen(8051,()=>{
    console.log("Servidor está rodando na porta: 8051")
})