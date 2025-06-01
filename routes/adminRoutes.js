// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// All routes require authentication
router.use(authMiddleware);

// Users
router.get('/users', roleMiddleware(['employee', 'manager', 'admin']), async (req, res) => {
  const users = await User.find({}, 'name email role');
  res.json(users);
});

router.post('/users', roleMiddleware(['employee', 'manager', 'admin']), async (req, res) => {
  const { name, email, password, role } = req.body;
  // Add validation and password hashing here
  const user = new User({ name, email, password, role });
  await user.save();
  res.status(201).json(user);
});

router.put('/users/:id',roleMiddleware(['employee', 'manager', 'admin']), async (req, res) => {
  const { name, email, role } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { name, email, role },
    { new: true }
  );
  res.json(user);
});

router.delete('/users/:id', roleMiddleware(['employee', 'manager', 'admin']), async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

// // Projects
// router.get('/projects', async (req, res) => {
//   const { status } = req.query;
//   const filter = status && status !== 'all' ? { status } : {};
//   const projects = await ProjectRequest.find(filter).populate('submittedBy', 'name email');
//   res.json(projects);
// });

// router.put('/projects/:id/approve', async (req, res) => {
//   const project = await ProjectRequest.findById(req.params.id);
//   if (!project) return res.status(404).json({ message: 'Project not found' });
//   project.status = 'approved';
//   project.remarks = req.body.remarks || '';
//   await project.save();
//   res.json(project);
// });

// router.put('/projects/:id/reject', async (req, res) => {
//   const project = await ProjectRequest.findById(req.params.id);
//   if (!project) return res.status(404).json({ message: 'Project not found' });
//   project.status = 'rejected';
//   project.remarks = req.body.remarks || '';
//   await project.save();
//   res.json(project);
// });

module.exports = router;
