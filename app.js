const express = require('express');
const app = express();

const userRoutes = require('./src/routes/carrera.routes');

app.use('/carreras', userRoutes);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});