import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  gender: { type: String },
  dateOfBirth: { type: Date },
  department: { type: String },
  designation: { type: String },
  salary: { type: Number, default: 0 },
  dateOfJoining: { type: Date },
  address: { type: String },
  emergencyContact: { type: String },
  employmentStatus: { type: String, default: 'Active' },
  avatar: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default mongoose.model('Employee', employeeSchema);
