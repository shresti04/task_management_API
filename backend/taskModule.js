const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  tTitle: { type: String, required: true },
  tDesc: { type: String, required: true },
  tStatus: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
  priority: { type: String },
  tAssignedTo: { type: [String] },
  active: { type: Boolean, default: true },
  // createdAt: {Date: now},
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
