
const express = require('express');
const router = express.Router();
const Camp = require('../models/Camp'); // Adjust path if your model is elsewhere

// Create a new camp
router.post('/', async (req, res) => {
  try {
    const camp = new Camp(req.body);
    await camp.save();
    res.status(201).json(camp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all camps
router.get('/', async (req, res) => {
  try {
    const camps = await Camp.find();
    res.json(camps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single camp by ID
router.get('/:id', async (req, res) => {
  try {
    const camp = await Camp.findById(req.params.id);
    if (!camp) return res.status(404).json({ error: 'Camp not found' });
    res.json(camp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a camp by ID
router.put('/:id', async (req, res) => {
  try {
    const camp = await Camp.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!camp) return res.status(404).json({ error: 'Camp not found' });
    res.json(camp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a camp by ID
router.delete('/:id', async (req, res) => {
  try {
    const camp = await Camp.findByIdAndDelete(req.params.id);
    if (!camp) return res.status(404).json({ error: 'Camp not found' });
    res.json({ message: 'Camp deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }})