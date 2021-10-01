module.exports = {
    index: (req, res, next) => {
        var response = {
            meta: {
                status: 200,
            },
            data: {
                message: 'Users Controller here'
            }
        }
        res.json(response)
    },
    
}