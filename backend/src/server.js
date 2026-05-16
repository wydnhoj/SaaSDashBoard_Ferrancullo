const express = require('express');
const cors = require('cors');
require('dotenv').config();

const testRoutes = require('./routes/test.routes');
const systemRoutes = require('./routes/system.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', systemRoutes)

app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});