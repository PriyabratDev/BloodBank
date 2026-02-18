const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');
const connectDB = require('./config/db');

//config env
dotenv.config();

//mongo db 
connectDB();

//rest obj
const app =express();

//middlewares
app.use(morgan('dev')); 
app.use(express.json());
app.use(cors());


//port 
const PORT = process.env.PORT || 8080;
// const PORT = 8080;

//route
app.use('/api/v1/test',require('./routes/test'));
app.use('/api/v1/auth',require('./routes/authRoutes'));

//listen
app.listen(PORT,()=>{
    console.log(`Server is running in ${process.env.DEV_MODE} on port ${PORT}`.bgBlue.white);
});
