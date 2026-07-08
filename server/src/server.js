import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import departmentRoutes from './routes/departmentRoutes.js';
import attendanceRoutes from './routes/attendanceRoutes.js';
import leaveRoutes from './routes/leaveRoutes.js';
import payrollRoutes from './routes/payrollRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import User from './models/User.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get('/api/health', (_req, res) => res.json({ ok: true, message: 'WorkSphere HRMS API is running' }));
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/leaves', leaveRoutes);
app.use('/api/payroll', payrollRoutes);

app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/worksphere').then(async () => {
  console.log('MongoDB connected');
  const existingAdmin = await User.findOne({ email: 'admin@worksphere.com' });
  if (!existingAdmin) {
    await User.create({
      name: 'WorkSphere Admin',
      email: 'admin@worksphere.com',
      password: 'admin123',
      role: 'Super Admin'
    });
    console.log('Seeded default admin account');
  }
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
