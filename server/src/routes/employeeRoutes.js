import express from 'express';
import { createEmployee, deleteEmployee, getEmployee, listEmployees, updateEmployee } from '../controllers/employeeController.js';
import { protect, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, listEmployees);
router.post('/', protect, authorizeRoles('Super Admin', 'HR'), createEmployee);
router.get('/:id', protect, getEmployee);
router.put('/:id', protect, authorizeRoles('Super Admin', 'HR'), updateEmployee);
router.delete('/:id', protect, authorizeRoles('Super Admin', 'HR'), deleteEmployee);

export default router;
