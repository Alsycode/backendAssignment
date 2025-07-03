const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const itemRoutes = require('./routes/item.js');
const logger = require('./middlewares/logger.js');
const notFound = require('./middlewares/notFound.js');

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.get('/', (req, res) => res.send('Inventory API is Running'));
app.get('/health', (req, res) => res.json({ status: 'OK', message: 'Server is healthy' }));
app.use('/items', itemRoutes);

// 404 handler
app.use(notFound);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error(err));
