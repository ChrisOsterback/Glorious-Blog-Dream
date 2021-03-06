const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const path = require('path')
const expressValidator = require('express-validator');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


mongoose
    .connect(`${process.env.MONGO_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log('Link Established With Database'));

mongoose.connection.on('error', err => {
    console.log(`Error While Establishing Link: ${err.message}`);
});

// bring in routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');


// middleware -
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
app.use('/api', postRoutes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: 'Unauthorized!' });
    }
});

app.use(express.static(path.join(__dirname, "client/build")));


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Link Has Been Established On Port: ${port}`);
});
