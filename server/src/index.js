const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => res.send('SentiMate API'));

app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/moodRoutes'));
app.use('/api', require('./routes/journalRoutes'));
app.use('/api', require('./routes/chatRoutes'));
app.use('/api', require('./routes/habitRoutes'));

const PORT = process.env.PORT || 5008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
