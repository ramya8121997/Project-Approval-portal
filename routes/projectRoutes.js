const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// All routes require authentication
router.use(authMiddleware);

// Submit a project request (Employee)
router.post('/', roleMiddleware(['employee', 'manager', 'admin']), projectController.submitRequest);

// Get all project requests (Manager, Admin)
router.get('/', roleMiddleware(['manager', 'admin']), projectController.getAllRequests);

// Approve request (Manager, Admin)
router.put('/:id/approve', roleMiddleware(['manager', 'admin']), projectController.approveRequest);

// Reject request (Manager, Admin)
router.put('/:id/reject', roleMiddleware(['manager', 'admin']), projectController.rejectRequest);

module.exports = router;
