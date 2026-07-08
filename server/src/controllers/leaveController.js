import Leave from '../models/Leave.js';

export const listLeaves = async (req, res, next) => {
  try {
    const leaves = await Leave.find().populate('employee').sort({ createdAt: -1 });
    res.json(leaves);
  } catch (error) {
    next(error);
  }
};

export const createLeave = async (req, res, next) => {
  try {
    const leave = await Leave.create(req.body);
    res.status(201).json(leave);
  } catch (error) {
    next(error);
  }
};

export const updateLeave = async (req, res, next) => {
  try {
    const leave = await Leave.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(leave);
  } catch (error) {
    next(error);
  }
};
