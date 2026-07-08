import express from 'express';
import { createPayroll, listPayroll } from '../controllers/payrollController.js';
import { protect, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, listPayroll);
router.post('/', protect, authorizeRoles('Super Admin', 'HR'), createPayroll);

export default router;
