// import and setup dotenv
const dot = require('dotenv');
dot.config()
// import other packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// import routes
const Upload = require('./router/upload.js');
const User = require('./router/user.js')
const Profile = require('./router/profile.js')
const Academic = require('./router/academic.js')
const Admin = require('./router/admin.js')

// setup express
const server = express();

// configure middlewares
server.use(cors());
server.use(express.json({ limit: '50mb' }))
server.use(express.urlencoded({ extended: true, limit: "50mb", parameterLimit: '100000' }))
server.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// setup database
mongoose
    .connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connection Established..."))
    .catch(err => console.log(`Mongo Connection error ${err}`))

// routes definition
server.use('/user', User);
server.use('/upload', Upload)
server.use('/profile', Profile)
server.use('/academic', Academic)
server.use('/admin', Admin)

// server lauching
server.listen(process.env.PORT, () => console.log("Server Started and Ready..."))