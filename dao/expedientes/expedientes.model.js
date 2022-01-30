const { accepts } = require('express/lib/request');
const { Database } = require('sqlite');
const getDb = require('../db');
let db = null;
class Expedientes {
  constructor() {
    getDb()
      .then((database) => {
        db = database;
        if (process.env.MIGRATE === 'true') {
          const createStatement = 'CREATE TABLE IF NOT EXISTS expedientes (id INTEGER PRIMARY KEY AUTOINCREMENT, identidad TEXT, fecha TEXT, descripcion TEXT, observacion TEXT, registros TEXT, ultimaActualizacion TEXT);';
          db.run(createStatement);
        }
      })
      .catch((err) => { console.error(err) });
  }

  new(identidad, fecha, descripcion, observacion, registros, ultimaActualizacion) {
    return new Promise((accept, reject) => {
      db.run(
        'INSERT INTO expedientes (identidad, fecha, descripcion, observacion, registros, ultimaActualizacion) VALUES (?, ?, ?, ?, ?, ?);',
        [identidad, fecha, descripcion, observacion, registros, ultimaActualizacion],
        (err, rslt) => {
          if (err) {
            console.error(err);
            reject(err);
          }
          accept(rslt);
        }
      );
    });
  }

  getAll() {
    return new Promise((accept, reject) => {
      db.all('SELECT * from expedientes;', (err, rows) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          accept(rows);
        }
      });
    });
  }
}

module.exports = Expedientes;