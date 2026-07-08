import express from 'express';
import { createAttendance, listAttendance } from '../controllers/attendanceController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, listAttendance);
router.post('/', protect, createAttendance);

export default router;
