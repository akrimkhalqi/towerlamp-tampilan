// Import library
const express = require('express');
const path = require('path');

// Inisialisasi router
const route = express.Router();

route.get('/login', (req, res) => {
    // Sajikan file login.html
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

route.get('/', (req, res) => {
    // Sajikan file index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Definisikan rute untuk /towerlamp/device/xx123
route.get('/towerlamp/device/xx123', (req, res) => {
    // Sajikan file unit.html
    res.sendFile(path.join(__dirname, 'public', 'unit.html'));
});

route.get('/tes-realtime', (req, res) => {
    const itemId = req.params.id;
    console.log(itemId);
    res.sendFile(path.join(__dirname, 'public', 'tes-realtime.html'));
});

route.get('/towerlamp/realtime/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'towerlamp-realtime.html'));
});

route.get('/towerlamp/history', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'towerlamp-history.html'));
});

// Eksport router untuk digunakan di file lain
module.exports = route;