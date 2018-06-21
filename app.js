const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const connection = require('./config/database');

// Routes
const users = require('./routes/users');
const caudal= require('./routes/caudal');

// Models
//const User = require('./models/user');
const Vivienda_Unifamiliar = require('./models/vivienda_unifamiliar');
const Diametro =require('./models/diametro');
const Accesorio=require('./models/accesorio');
// Sync changes in models
connection.sync({ logging: false });

// Create app
const app = express();

// Port Number
const port = 3000;

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));



// Router
app.use('/caudal', caudal);


// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}.`));