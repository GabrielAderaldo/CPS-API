const express = require('express')
const router = express.Router()
const authMiddlewhere = require('../middleweres/auth')
const User = require('../models/users')

router.use(authMiddlewhere)


router.get('/DashBoard',(req,res)=>{
    const id = req.userId
    const type = req.userTypeUser
    res.json({Autenticação:type,id:id})
})

router.get('/on',(req,res) =>{
    res.json({led:true})
})

router.get('/off',(req,res) =>{
    res.json({led:false})
})

module.exports = (app) => app.use('/user',router)