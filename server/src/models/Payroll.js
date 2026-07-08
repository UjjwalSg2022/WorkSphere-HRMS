import mongoose from 'mongoose';

const payrollSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  month: { type: String, required: true },
  basicSalary: { type: Number, default: 0 },
  hra: { type: Number, default: 0 },
  bonus: { type: Number, default: 0 },
  pf: { type: Number, default: 0 },
  tax: { type: Number, default: 0 },
  otherDeductions: { type: Number, default: 0 },
  netSalary: { type: Number, default: 0 },
  status: { type: String, default: 'Processed' }
}, { timestamps: true });

export default mongoose.model('Payroll', payrollSchema);
