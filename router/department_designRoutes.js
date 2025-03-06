const express = require('express');
const router = express.Router();
const { create, findAll, findOne, update, deleteDepartmentDesign } = require('../controllers/departmentDesignControllers');

router.route('/')
    .get(findAll)
    .post(create);

router.route('/:deptid/:desigid')
    .get(findOne)
    .patch(update)
    .delete(deleteDepartmentDesign);

module.exports = router;