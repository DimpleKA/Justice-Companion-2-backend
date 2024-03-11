// routes/formDataRoutes.js

const express = require('express');
const router = express.Router();
const FormData = require('../models/formData');

// POST endpoint to handle form submission
router.post('/submit-form', async (req, res) => {
  try {
    const formData = req.body;
    // Save form data to MongoDB
    const savedData = await FormData.create(formData);
    console.log('Form data saved:', savedData);
    // Return a success response
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting form:', error);
    // Return an error response
    res.status(500).json({ error: 'Failed to submit form' });
  }
});

module.exports = router;
