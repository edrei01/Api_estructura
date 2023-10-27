const express = require('express');
const router = express.Router();
const controlador = require('../controllers/carreras.controller');

router.get('/obtenerCarrera/', async (req, res) => {
  const carrera = await controlador.obtenerCarrera();
  res.json(carrera);
});

router.get('/obtenerCarrera/:id', async (req, res) => {
  const carreraId = req.params.id;
  const carrera = await controlador.obtenerCarrerasPorid(carreraId);

  if (carrera) {
    res.json(carrera);
  } else {
    res.status(404).json({ message: 'Carrera no encontrada' });
  }
});

router.post('/crearCarreras/', async (req, res) => {
  const carrera = req.body;
  await controlador.crearCarreras(carrera);
  res.json({message: 'Usuario creado'});
}); 

router.put('/actualizarCarreras/:id', async (req, res) => {
  const carrera = req.body;
  await controlador.actualizarCarreras(req.params.id, carrera);
  res.json({ message: 'Usuario actualizado' });
});


router.delete('/borrarCarrera/:id', async (req, res) => {
  await controlador.borrarCarrera(req.params.id);
  res.json({ message: 'Carrera borrado' });
});

module.exports = router;