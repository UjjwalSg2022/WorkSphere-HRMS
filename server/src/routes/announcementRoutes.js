import express from 'express';
import { createAnnouncement, deleteAnnouncement, listAnnouncements, markAnnouncementRead, updateAnnouncement } from '../controllers/announcementController.js';
import { protect, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, listAnnouncements);
router.post('/', protect, authorizeRoles('Super Admin', 'HR'), createAnnouncement);
router.put('/:id', protect, authorizeRoles('Super Admin', 'HR'), updateAnnouncement);
router.delete('/:id', protect, authorizeRoles('Super Admin', 'HR'), deleteAnnouncement);
router.post('/:id/read', protect, markAnnouncementRead);

export default router;
