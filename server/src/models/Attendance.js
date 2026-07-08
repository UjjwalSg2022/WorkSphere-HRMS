import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  date: { type: Date, required: true },
  checkIn: { type: String },
  checkOut: { type: String },
  workingHours: { type: Number, default: 0 },
  status: { type: String, default: 'Present' },
  lateArrival: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Attendance', attendanceSchema);
