import express from 'express';
import Task from '../models/Task.js';
import { authMiddleware } from '../middlewares/auth.js';

const router = express.Router();
router.use(authMiddleware);

router.get('/', async (req, res) => {
  const tasks = await Task.find({ user: req.userId });
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const task = await Task.create({ ...req.body, user: req.userId });
  res.status(201).json(task);
});

router.put('/:id', async (req, res) => {
  const updated = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.userId },
    req.body,
    { new: true }
  );
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
  res.json({ message: 'Task deleted' });
});

export default router;
 