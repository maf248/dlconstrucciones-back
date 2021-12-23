const db = require('../db/models');
const {
    validationResult
} = require('express-validator');

module.exports = {
    index: (req, res, next) => {
        db.Project.findAll({
                include: [{
                    association: "Users"
                }]
            })
            .then(projects => {

                var response = {
                    meta: {
                        status: 200,
                    },
                    data: [
                        ...projects
                    ]
                }
                res.json(response)
            })
            .catch(err => console.log(err))
    },
    detail: (req, res, next) => {
        db.Project.findByPk(req.params.id, {
                include: [{
                    association: "Users"
                }]
            })
            .then(project => {
                var response = {
                    meta: {
                        status: 200,
                    },
                    data: project
                }
                res.json(response)
            })
            .catch(err => console.log(err))
    },
    edit: (req, res, next) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Project.update({
                    users_id: req.body.user,
                    balance: req.body.balance,
                    cronoflow: req.file.filename
                }, {
                    where: {
                        id: {
                            [db.Sequelize.Op.like]: [req.params.id]
                        }
                    }
                })
                .then(project => {

                    if (project) {
                        res.redirect(`/api/projects/${req.params.id}`)
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
            db.Project.create({
                    users_id: req.body.user,
                    balance: req.body.balance,
                    cronoflow: req.file.filename
                })
                .then(project => {
                    return res.json({
                        meta: {
                            status: 201
                        },
                        data: project
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
        db.Project.destroy({
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
                        data: `Successfully deleted project id: ${req.params.id}`
                    });
                } else {
                    return res.json({
                        meta: {
                            status: 409
                        },
                        data: `Could not delete project id: ${req.params.id}`
                    });
                }
            })
            .catch(err => console.log(err))
    }
}