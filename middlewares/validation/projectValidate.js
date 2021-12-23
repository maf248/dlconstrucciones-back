const {
    check,
    body
} = require('express-validator');
const db = require('../../db/models');

module.exports = [
    check('user')
    .isNumeric()
    .custom(async function (value, {
        req
    }) {
        let user;
        try {
            user = await db.User.findOne({
                where: {
                    id: req.body.user
                }
            })
            if (user) {
                return true;
            } else {
                return Promise.reject();
            }
        } catch (error) {
            console.log(error);
        }
    })
    .withMessage('El ID de usuario debe ser numerico y existir'),
    check('balance')
    .isNumeric()
    .isInt({ gt: -1 })
    .withMessage('El balance debe ser mayor a 0'),
    check('cronoflow')
    .custom((value, {
        req
    }) => {
        switch (req.file.mimetype) {
            case 'application/vnd.ms-excel':
                return '.xls';
            case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
                return '.xlsx';
            default:
                return false;
        }
    })
    .withMessage('El archivo debe tener formato excel: xls o xlsx')
    
]