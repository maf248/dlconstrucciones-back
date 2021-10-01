module.exports = {
    index: (req, res, next) => {
        var response = {
            meta: {
                status: 200,
            },
            data: {
                message: 'Interests Controller here (para slider en inicio c/ CRUD de intereses)'
            }
        }
        res.json(response)
    },
    
}