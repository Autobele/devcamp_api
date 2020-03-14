const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colorse = require('colors');
const connectionDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env'});

// Connect to database
connectionDB();

// Routes files
const bootcamps = require('./routes/bootcamps');

const app = express();

// BodyParser
app.use(express.json());

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Mount routers
app.use('/api/v1/bootcamps/', bootcamps);

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV;

const server = app.listen(PORT, console.log(`Server running in ${ENV} mode on port ${PORT}`.yellow.bold))

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    server.close(() => process.exit(1));
})
