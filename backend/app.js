const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./router');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/tasks', taskRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
