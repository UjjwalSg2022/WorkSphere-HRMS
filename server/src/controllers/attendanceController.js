import Attendance from '../models/Attendance.js';

export const listAttendance = async (req, res, next) => {
  try {
    const records = await Attendance.find().populate('employee').sort({ date: -1 });
    res.json(records);
  } catch (error) {
    next(error);
  }
};

export const createAttendance = async (req, res, next) => {
  try {
    const record = await Attendance.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    next(error);
  }
};
