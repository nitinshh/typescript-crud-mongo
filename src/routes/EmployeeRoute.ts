import express from 'express'
import EmployeeController from '../controllers/EmployeeController'

const router = express.Router()

router.post('/create', EmployeeController.createEmployee);
router.get('/getAll', EmployeeController.getAllEmployees);
router.get('/employee/:id', EmployeeController.getEmployee);
router.put('/employee/:id', EmployeeController.updateEmployee);
router.delete('/employee/:id', EmployeeController.deleteEmployee);


export default router;