module.exports = {
    index: (req, res, next) => {
        var response = {
            meta: {
                status: 200,
            },
            data: {
                message: 'Contact Controller here (endpoint post para form de contacto, enviar a donde? Mail? Dashboard de Admin?)'
            }
        }
        res.json(response)
    },
    
}