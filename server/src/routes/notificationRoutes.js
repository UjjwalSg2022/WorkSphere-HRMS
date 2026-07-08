import express from 'express';
import { createNotification, listNotifications, markNotificationRead } from '../controllers/notificationController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, listNotifications);
router.post('/', protect, createNotification);
router.put('/:id/read', protect, markNotificationRead);

export default router;
