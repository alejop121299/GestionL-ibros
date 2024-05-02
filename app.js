// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path'); 
const libroRoutes = require('./routes/libroRoutes');




const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));



// Middleware para renderizar las vistas
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Conexión a la base de datos
mongoose.connect("mongodb://localhost:27017/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error(err));



app.use((req, res, next)=>{
    app.locals.user=req.user;
    app.locals.token=req.token;
    next();
});
app.use(libroRoutes);


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:3000`);
});
