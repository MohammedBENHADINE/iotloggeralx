const express = require('express');
const WebSocket = require('ws');

const app = express();
const wss = new WebSocket.Server({ port: 8080 });

// Middleware
app.use(express.json());

// Routes
const sensorRoutes = require('./routes/sensorRoutes');
app.use('/api/sensors', sensorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        // Handle incoming sensor data
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});