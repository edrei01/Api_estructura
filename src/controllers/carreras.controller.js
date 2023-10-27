const db = require('../config/conexion');

const obtenerCarrera = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM carrera;', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const obtenerCarrerasPorid = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM carrera WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
} 

const crearCarreras = (carrera) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO carrera SET ?', carrera, (err, results) => {
      if (err) reject(err);
      resolve(results);
    }); 
  });
}

const actualizarCarreras = (id, carrreras) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE carrera SET ? WHERE id = ?', [carrreras, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const borrarCarrera = (id) => {
  return new Promise((resolve, reject) => {
    console.log('Intentando eliminar carrera con ID:', id); // Agregar registro para depuración
    db.query('DELETE FROM carrera WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Error al eliminar carrera:', err); // Agregar registro de error
        reject(err);
      }
      resolve(results);
    });
  });
}


module.exports = {
  obtenerCarrera,
  obtenerCarrerasPorid, 
  crearCarreras,
  actualizarCarreras,
  borrarCarrera
}