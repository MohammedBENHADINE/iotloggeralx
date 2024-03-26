const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    name: String,
    location: String,
    temperature: Number,
    humidity: Number,
    protocol: String,
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;
