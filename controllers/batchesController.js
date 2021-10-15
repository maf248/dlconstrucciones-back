const db = require('../db/models');

module.exports = {
    index: (req, res, next) => {
        db.Batch.findAll()
        .then(batches => {
          

          var response = {
            meta: {
                status: 200,
            },
            data: [
                ...batches
            ]
        }
        res.json(response)
        })
        .catch(err => console.log(err))
    },
    
}