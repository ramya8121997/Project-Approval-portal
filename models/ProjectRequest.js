// models/ProjectRequest.js

const mongoose = require('mongoose');

const projectRequestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  remarks: {
    type: String,
    default: '',
  },
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Assuming User model exists
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('ProjectRequest', projectRequestSchema);
