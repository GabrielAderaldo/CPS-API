const express = require('express')
const brc = require('bcrypt')
const User = require('../models/users')
const Registro = require('../models/registros')
const router = express.Router()
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')


function generatedToken(params ={}){
    return jwt.sign(params,authConfig.secret,{ expiresIn: 86400})
}


router.get('/listar', async (req,res)=>{

    const listagem = await Registro.find()
    res.status(200).json({ listagem })

})


//As rotas para o acesso serão feitas aqui pois assim não precisa de autenticação...
router.get('/rfidEntrada', async (req,res)=>{

    

    registrar = {
        name:"Gabriel Aderaldo",
        indentificador:`Cartâo branco  99 0A 6D 99 No milisegundo: ${Date.now()}`
    }


    const registro = await Registro.create(registrar)



    res.status(200).json({mensagem:`Registrado a entrada de: ${registro.name} com o Tolken: ${registro.indentificador}`})
})


router.post('/registro', async (req,res)=>{
    
    try{

        const { email } = req.body

        if (await User.findOne({email})){return res.status(400).json({Error:"Usuario já cadastrado"})}
        const user = await User.create(req.body)
        user.password = undefined
        return res.status(200).json({user,Token:generatedToken({id:user.id})})


    }catch(err){

        res.status(400).json({error:err.errors})

    }
})


router.post('/login', async (req,res)=>{
    try{
        const cheagando = req.body
        const {email,password} = req.body
        console.log(cheagando)
        const user = await User.findOne({email}).select('+password')
        if(!user){return res.status(400).send({Erro:"Usuario não encontrado..."})}
        if(!await brc.compare(password,user.password)){res.status(400).send({error:"Senha incorreta!"})}
        user.password = undefined
        

        res.status(200).send({Usuario:user,Token:generatedToken({id:user.id})})

    }catch(err){res.send({error:err})}
})

module.exports = (app) => app.use('/auth',router)