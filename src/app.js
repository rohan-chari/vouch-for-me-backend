const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const exampleRoutes = require('./routes/exampleRoutes');
const waitlistRoutes = require('./routes/waitlistRoutes');
const registrationRoutes = require('./routes/registrationRoutes')
const userRoutes = require('./routes/userRoutes')
const templateRoutes = require('./routes/templateRoutes');

app.use('/api/example', exampleRoutes);
app.use('/api/waitlist', waitlistRoutes);
app.use('/api/registration', registrationRoutes);
app.use('/api/user', userRoutes);
app.use('/api/templates', templateRoutes);

module.exports = app;
