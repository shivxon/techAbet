var express = require('express');
var router = express.Router();
const employeeCtrl = require('../../../../controllers/employeeCtrl')


router.post('/add_brand', employeeCtrl.employee);
router.get('/show_emp', employeeCtrl.showEmployees);
router.get('/show_single_employee/:id', employeeCtrl.showSingleEmployees);
router.post('/edited_employee', employeeCtrl.EditedEmployeesDetails);
router.post('/delete_employee', employeeCtrl.deleteEmployee);




module.exports = router;