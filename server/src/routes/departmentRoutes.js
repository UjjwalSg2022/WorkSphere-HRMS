import express from 'express';
import { createDepartment, deleteDepartment, listDepartments, updateDepartment } from '../controllers/departmentController.js';
import { protect, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, listDepartments);
router.post('/', protect, authorizeRoles('Super Admin', 'HR'), createDepartment);
router.put('/:id', protect, authorizeRoles('Super Admin', 'HR'), updateDepartment);
router.delete('/:id', protect, authorizeRoles('Super Admin', 'HR'), deleteDepartment);

export default router;
