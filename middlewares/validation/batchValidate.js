const {
    check,
    body
} = require('express-validator');
const db = require('../../db/models');

module.exports = [
    check('category')
    .isNumeric()
    .custom(async function (value, {
        req
    }) {
        let category;
        try {
            category = await db.Category.findOne({
                where: {
                    id: req.body.category
                }
            });
            if (category > 0) {
                return true;
            } else {
                return Promise.reject();
            }
        } catch (error) {
            console.log(error);
        }
    })
    .withMessage('La categoría debe ser numerica, y tiene que existir en la base de datos'),
    check('title')
    .isLength({
        min: 3
    })
    .withMessage('El titulo debe contener al menos 3 carateres'),
    check('description')
    .isLength({
        min: 10
    })
    .withMessage('La descripción debe contener al menos 10 caracteres'),
    check('image')
    .custom((value, {req}) => {
        switch (req.file.mimetype) {
            case 'image/jpg':
                return '.jpg';
            case 'image/jpeg':
                return '.jpeg';
            case  'image/png':
                return '.png';
            default:
                return false;
        }
    })
    .withMessage('El archivo debe tener formato: jpg jpeg o png'),
    check('sold')
    .isBoolean()
    .withMessage('Debe ser booleano, true o false')
]