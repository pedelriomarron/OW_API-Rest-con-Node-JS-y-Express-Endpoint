const User =require("../models/user")
const bcryptjs = require("bcryptjs")
const jwt = require("../services/jwt")

async function register(req,res){
    const user = new User(req.body)
    const {email,password}= req.body


    try {
        if(!email) throw {"msg":"Email es obligatorio"}
        if(!password) throw {"msg":"Contraseña es obligatorio"}

        // Revisamos si el email está en uso
        const foundEmail = await User.findOne({email})

        if(foundEmail) throw {"msg":"Email está en uso"}


        const salt = bcryptjs.genSaltSync(10)
        user.password = await bcryptjs.hash(password,salt)
        user.save()

        res.status(200).send(user)

    } catch (error) {
        res.status(500).send(error)
    }

}



async function login(req,res){
    const {email,password}= req.body


    try {
        if(!email) throw {"msg":"Email es obligatorio"}
        if(!password) throw {"msg":"Contraseña es obligatorio"}

        // Revisamos si el email está en uso
        const user = await User.findOne({email})
        if(!user) throw {"msg":"Error en el email o contraseña"}

        const passwordSuccess = await bcryptjs.compare(password,user.password)
        if(!passwordSuccess) throw {"msg":"--Error en el email o contraseña"}


        res.status(200).send({token:jwt.createToken(user,"12h")})

    } catch (error) {
        res.status(500).send(error)
    }
} 


function protected(req,res){

    res.status(200).send({msg:"Contenido protegido OK"})
}

module.exports={
    register,
    login,
    protected
}