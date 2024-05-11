const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 8000;

const route = require('./routes');
let API = 'http://api57.transformore.net';

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// Middleware untuk menetapkan folder 'public' sebagai folder statis
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the 'node_modules' directory
app.use('/node', express.static(__dirname + '/node_modules'));

// Menggunakan router untuk rute towerlamp
app.use(route);

// Konfigurasi agar base URL selalu mengarah ke '/'
app.use((req, res, next) => {
    req.baseUrl = '/';
    next();
});

// Mengatur endpoint untuk menyalakan Engine
app.post('/engine/on', (req, res) => {
// Panggil API publik untuk menyalakan Engine
axios.post(`${API}/device/v1/towerlamp/send`, { codeName:"xx123", eng_control: true })
    .then((response) => {
        console.log(response.data);
        res.send('Engine telah dinyalakan.');
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Gagal menyalakan Engine.');
    });
});

// Mengatur endpoint untuk mematikan Engine
app.post('/engine/off', (req, res) => {
// Panggil API publik untuk mematikan Engine
axios.post(`${API}/device/v1/towerlamp/send`, { codeName:"xx123", eng_control: false })
    .then((response) => {
        console.log(response.data);
        res.send('Engine telah dimatikan.');
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Gagal mematikan Engine.');
    });
});

// Function to fetch data from the API and emit it to clients
async function fetchDataAndEmit(codeName) {
    try {
        io.emit('fetchingData');
        const response = await axios.get(`${API}/device/v1/towerlamp/data-realtime?codeName=${codeName}`);
        const data = response.data.data;
        io.emit('newData', data);
        // console.log('berhasil get data', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }finally {
        // Inform clients that data fetching is finished
        io.emit('dataFetched');
    }
}

// Function to fetch data from the API and emit it to clients
async function fetchAllDataRealtime() {
    try {
        io.emit('fetchingData');
        const response = await axios.get(`${API}/device/v1/towerlamp/realtime`);
        const data = response.data;
        io.emit('newData', data);
        // console.log('berhasil get data', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }finally {
        // Inform clients that data fetching is finished
        io.emit('dataFetched');
    }
}

// Socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected');

    let intervalId; // Variable to store interval ID

    socket.on('getCodeName', (codeName) => {
        clearInterval(intervalId); // Clear previous interval (if any)
        console.log('ini', codeName);

        // Function to periodically fetch data and emit it to clients
        const fetchAndEmitPeriodically = async (codeName) => {
            intervalId = setInterval(async () => {
                await fetchDataAndEmit(codeName);
            }, 100); // Fetch data every seconds (adjust as needed)
        };

        // Start periodic data fetching
        fetchAndEmitPeriodically(codeName); // Provide the codeName
    });

    socket.on('getAllDataRealtime', () => {
        clearInterval(intervalId); // Clear previous interval (if any)
        console.log('Ambil seluruh data device');

        // Function to periodically fetch data and emit it to clients
        const fetchAllDataRealtimePeriodically = async () => {
            intervalId = setInterval(async () => {
                await fetchAllDataRealtime();
            }, 200); // Fetch data every seconds (adjust as needed)
        };

        // Start periodic data fetching
        fetchAllDataRealtimePeriodically(); // Provide the codeName
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        clearInterval(intervalId); // Stop periodic fetching when client disconnects
        console.log('A user disconnected');
    });
});


server.listen(port, () => {
    console.log(`Server sedang berjalan ${port}`);
});
