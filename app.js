require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');


const app = express();
app.use(express.json());

// Connect DB
connectDB();

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
