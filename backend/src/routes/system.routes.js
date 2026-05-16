const express = require('express');
const router = express.Router();
const { pool } = require('../db');

router.get('/', async (req, res) => {
    res.json({ status: 'ok', service: 'backend'})
});

router.get('/db-test', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({
            message: 'DB Connected',
            time: result.rows[0].now
        })
    } catch (error) {
        res.status(500).json({
            message: 'DB Connection Error',
            error: error.message
        })
    }
})

module.exports = router;