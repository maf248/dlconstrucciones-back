const db = require('../db/models');
const {
    validationResult
} = require('express-validator');

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
                        id: {
                            [db.Sequelize.Op.like]: [req.params.id]
                        }
                    }
                })
                .then(batch => {

                    if (batch) {
                        res.redirect(`/api/batches/${req.params.id}`)
                    }
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
    create: (req, res, next) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Batch.create({
                    categories_id: req.body.category,
                    title: req.body.title,
                    description: req.body.description,
                    image: req.file.filename,
                    price: req.body.price,
                    sold: req.body.sold
                })
                .then(batch => {
                    return res.json({
                        meta: {
                            status: 201
                        },
                        data: batch
                    });
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
    delete: (req, res, next) => {
        console.log(req.params.id)
        db.Batch.destroy({
                where: {
                    id: {
                        [db.Sequelize.Op.like]: [req.params.id]
                    }
                }
            })
            .then(x => {
                if (x) {
                    return res.json({
                        meta: {
                            status: 200
                        },
                        data: `Successfully deleted batch id: ${req.params.id}`
                    });
                } else {
                    return res.json({
                        meta: {
                            status: 409
                        },
                        data: `Could not delete batch id: ${req.params.id}`
                    });
                }
            })
            .catch(err => console.log(err))
    }
}