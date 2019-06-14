const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// DB
mongoose.connect('mongodb://localhost/crud-mongo', { useNewUrlParser: true })
    .then(db => console.log('Se ha establecido la conexion con la base de datos'))
    .catch(err => console.log('Error al conectar con la base de datos', err)); 

// Imports
const indexRouters = require('./routes/index');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', indexRouters);

// Create server
app.listen(app.get('port'), () => {
    console.log(`El servidor se esta ejecutando en el puerto ${app.get('port')}`);    
});