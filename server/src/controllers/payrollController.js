import Payroll from '../models/Payroll.js';

export const listPayroll = async (req, res, next) => {
  try {
    const payrolls = await Payroll.find().populate('employee').sort({ createdAt: -1 });
    res.json(payrolls);
  } catch (error) {
    next(error);
  }
};

export const createPayroll = async (req, res, next) => {
  try {
    const payroll = await Payroll.create(req.body);
    res.status(201).json(payroll);
  } catch (error) {
    next(error);
  }
};
