module.exports = {
    index: (req, res, next) => {
        var response = {
            meta: {
                status: 200,
            },
            data: {
                message: 'Jobs Controller here (categorias -> construccion / antenas)'
            }
        }
        res.json(response)
    },
    
}