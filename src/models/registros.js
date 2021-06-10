const mongoose = require('../database')
const bcrypt = require('bcrypt')


const RegistroSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    indentificador:{
        type:String,
        unique:true,
        required:true,
        lowercase:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

RegistroSchema.pre('save', async function(next){

    next()
})


const Registro = mongoose.model('Registro',Registro)

module.exports = Registro