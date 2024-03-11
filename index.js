const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formDataRoutes = require('./routes/formDataRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Dimpleusername:Dimple999@cluster0.l6frpvy.mongodb.net/legal-aid-db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Legal Aid API!');
});

// API routes
app.use('/api', formDataRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
