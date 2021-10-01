module.exports = {
    index: (req, res, next) => {
        var response = {
            meta: {
                status: 200,
            },
            data: {
                message: 'Services Controller here (simple, sin CRUD?)'
            }
        }
        res.json(response)
    },
    
}