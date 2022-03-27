const moment = require("moment")
const jwt = require("../services/jwt")

const SECRET_KEY = jwt.SECRET_KEY

function ensureAuth(req,res,next){

    if(!req.headers.authorization) return res.status(403).send({msg:"La cabecera no tiene auth"})

    const token= req.headers.authorization.replace(/['"]+/g,"")
    const payload = jwt.decodeToken(token,SECRET_KEY)

    try {

        if(payload.exp <= moment().unix()){
            return res.status(400).send({msg:"Token expirado"})
        }
        
    } catch (error) {
        return res.status(400).send({msg:"Token invalido"})
    }

    req.user = payload
    next()

}

module.exports = {ensureAuth}
