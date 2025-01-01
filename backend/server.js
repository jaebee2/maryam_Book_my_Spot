const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db'); // Database configuration
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

dotenv.config(); // Load environment variables

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Test database connection
app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS solution');
    res.json({ message: 'Database connected!', solution: rows[0].solution });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
