const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Camp = require('./models/Camp');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// filepath: backend/index.js
const campRoutes = require('./routes/camp');
app.use('/api/camp', campRoutes);

// filepath: backend/index.js
const cors = require('cors');
app.use(cors());

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => res.send('API Running'));

// User Registration
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// User Login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Auth middleware
function auth(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
}

// CRUD for Camps
app.get('/api/camps', async (req, res) => {
  const camps = await Camp.find();
  res.json(camps);
});

app.post('/api/camps', auth, async (req, res) => {
  try {
    const camp = new Camp(req.body);
    await camp.save();
    res.status(201).json(camp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put('/api/camps/:id', auth, async (req, res) => {
  try {
    const camp = await Camp.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(camp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete('/api/camps/:id', auth, async (req, res) => {
  try {
    await Camp.findByIdAndDelete(req.params.id);
    res.json({ message: 'Camp deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(process.env.PORT || 5000, () => console.log('Server started'));
