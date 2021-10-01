module.exports = {
    index: (req, res, next) => {
        var response = {
            meta: {
                status: 200,
            },
            data: {
                message: 'Batches Controller here (c/ CRUD, categorias -> costa esmeralda / campo)'
            }
        }
        res.json(response)
    },
    
}