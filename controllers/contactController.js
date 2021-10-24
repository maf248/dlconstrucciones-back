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
    contact: (req, res, next) => {
        console.log(`El mail que llegó por POST es: ${req.body.email}`)
        var response = {
            meta: {
                status: 200,
            },
            data: {
                message: 'Contact Controller here (endpoint POST para form de contacto) - Falta implementar nodemailer por back y re-captcha por front'
            }
        }
        res.json(response)
    },
    
}