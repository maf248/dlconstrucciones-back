const db = require('../db/models');

module.exports = {
    index: (req, res, next) => {
        db.Service.findAll()
        .then(services => {
          

          var response = {
            meta: {
                status: 200,
            },
            data: [
                ...services
            ]
        }
        res.json(response)
        })
        .catch(err => console.log(err))
    },
    
}