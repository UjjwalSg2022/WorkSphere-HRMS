import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  category: { type: String, default: 'Company' },
  pinned: { type: Boolean, default: false },
  author: { type: String, default: 'HR Admin' },
  audience: { type: String, default: 'All' },
  readers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

export default mongoose.model('Announcement', announcementSchema);
