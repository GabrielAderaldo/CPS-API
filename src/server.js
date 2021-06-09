const express = require('express')
const app = express()
app.use(express.json())
require('./controllers/authControllers')(app)
require('./controllers/coreControllers')(app)



app.listen(8051,()=>{
    console.log("Servidor está rodando na porta: 8051")
})