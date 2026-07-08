import express from 'express';
import { createLeave, listLeaves, updateLeave } from '../controllers/leaveController.js';
import { protect, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, listLeaves);
router.post('/', protect, createLeave);
router.put('/:id', protect, authorizeRoles('Super Admin', 'HR', 'Manager'), updateLeave);

export default router;
