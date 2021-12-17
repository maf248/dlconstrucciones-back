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
    detail: (req, res, next) => {
        db.Batch.findByPk(req.params.id, {
                include: [{
                    association: "Images"
                }]
            })
            .then(batch => {


                var response = {
                    meta: {
                        status: 200,
                    },
                    data: batch
                }
                res.json(response)
            })
            .catch(err => console.log(err))
    },
    edit: (req, res, next) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Batch.update({
                categories_id: req.body.category,
                title: req.body.title,
                description: req.body.description,
                image: req.file.filename,
                price: req.body.price,
                sold: req.body.sold
            }, {
                where: {
                id: {[db.Sequelize.Op.like] : [req.session.user.id]}
            }})
                .then(batch => {
                    var response = {
                        meta: {
                            status: 200,
                        },
                        data: batch
                    }
                    res.json(response)
                })
                .catch(err => console.log(err))
        } else {
            return res.json({
                meta: {
                    status: 401
                },
                data: {
                    errors: errors.errors,
                    body: req.body
                }
            });
        }
    },
}