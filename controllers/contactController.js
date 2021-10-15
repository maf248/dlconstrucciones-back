module.exports = {
    index: (req, res, next) => {
        var response = {
            meta: {
                status: 200,
            },
            data: {
                message: 'Contact Controller here (endpoint POST para form de contacto, enviar a Mail!! Paquete de node? y Dashboard de Admin?)'
            }
        }
        res.json(response)
    },
    
}