const db = require('../db/models');

module.exports = {
    index: (req, res, next) => {
        db.User.findAll()
        .then(users => {
          

          var response = {
            meta: {
                status: 200,
            },
            data: [
                ...users
            ]
        }
        res.json(response)
        })
        .catch(err => console.log(err))
    },
    
}