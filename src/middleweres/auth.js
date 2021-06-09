const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')
module.exports = (req,res,next) => {
    const header = req.headers.authorization
    if(!header){return res.status(401).send({auth:false,err:"Falha na verficação do token "})}
    const parts = header.split(' ')

    if(!parts.length ===2){return res.status(401).send({auth:false,err:"Token mal formado, verificar as informações"})}

    const [scheme,token] = parts

    if(!/^Bearer$/i.test(scheme)){return res.status(401).send({auth:false,err:"Token mal formado, verificar as informações"})}

    jwt.verify(token,authConfig.secret,(err,decoded) =>{
        if(err){return res.status(401).send({auth:false,err:"Token mal formado, verificar as informações"})}
        req.userId = decoded.id
        return next()
    })
}