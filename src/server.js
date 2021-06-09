const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
require('./controllers/authControllers')(app)
require('./controllers/coreControllers')(app)



app.listen(process.env.PORT || 3000,()=>{
    console.log("Servidor está rodando na porta: "+process.env.PORT)
})