const db = require('../db/models');

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

}