const ProjectRequest = require('../models/ProjectRequest');

// Submit a new project request
exports.submitRequest = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newRequest = new ProjectRequest({
      title,
      description,
      status: 'pending',
      submittedBy: req.user.id,  // From auth middleware
    });
    await newRequest.save();
    console.log('New project request submitted:', newRequest);
    res.status(201).json({ message: 'Project request submitted', request: newRequest });
  } catch (error) {
    console.error('Error submitting project request:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all project requests (admin/managers)
exports.getAllRequests = async (req, res) => {
  try {
    const requests = await ProjectRequest.find().populate('submittedBy', 'name email');
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


// Get requests submitted by current user (employee)
exports.getMyRequests = async (req, res) => {
  try {
    // Populate submittedBy to get user name and email info
    const requests = await ProjectRequest.find({ submittedBy: req.user.id }).populate('submittedBy', 'name email');
    res.status(200).json({ data: requests });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Approve a project request
exports.approveRequest = async (req, res) => {
  try {
    const request = await ProjectRequest.findById(req.params.id);
    if (!request) return res.status(404).json({ message: 'Request not found' });

    request.status = 'approved';
    request.remarks = req.body.remarks || '';
    await request.save();

    res.status(200).json({ message: 'Request approved', request });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Reject a project request
exports.rejectRequest = async (req, res) => {
  try {
    const request = await ProjectRequest.findById(req.params.id);
    if (!request) return res.status(404).json({ message: 'Request not found' });

    request.status = 'rejected';
    request.remarks = req.body.remarks || '';
    await request.save();

    res.status(200).json({ message: 'Request rejected', request });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
