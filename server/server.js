const express = require('express');
const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes
app.use(require('./routes/routes'));


// Port Servidor
app.listen(3000, () => {
    console.log('Servidor en puerto: ', 3000);
});