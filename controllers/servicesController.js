const db = require('../db/models');
const {
    validationResult
} = require('express-validator');

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
    detail: (req, res, next) => {
        db.Service.findByPk(req.params.id, {
                include: [{
                        association: "Pictures"
                    },
                    {
                        association: "Contents"
                    }
                ]
            })
            .then(service => {


                var response = {
                    meta: {
                        status: 200,
                    },
                    data: service
                }
                res.json(response)
            })
            .catch(err => console.log(err))
    },
    edit: (req, res, next) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Service.update({
                    title: req.body.title,
                    image: req.file.filename
                }, {
                    where: {
                        id: {
                            [db.Sequelize.Op.like]: [req.params.id]
                        }
                    }
                })
                .then(service => {

                    if (service) {
                        res.redirect(`/api/services/${req.params.id}`)
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
            db.Service.create({
                    title: req.body.title,
                    image: req.file.filename
                })
                .then(service => {
                    return res.json({
                        meta: {
                            status: 201
                        },
                        data: service
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
        db.Service.destroy({
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
                        data: `Successfully deleted service id: ${req.params.id}`
                    });
                } else {
                    return res.json({
                        meta: {
                            status: 409
                        },
                        data: `Could not delete service id: ${req.params.id}`
                    });
                }
            })
            .catch(err => console.log(err))
    }
}