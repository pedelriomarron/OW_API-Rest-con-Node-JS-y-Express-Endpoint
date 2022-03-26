function getHello(req,res){
    res.status(200).send({
        msg:"hola desde controllers"
    })
}

module.exports = {
    getHello
}