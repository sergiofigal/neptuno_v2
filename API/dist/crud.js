"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crud = void 0;

var _mongodb = require("mongodb");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var crud = {
  insertar: function () {
    var _insertar = _asyncToGenerator(function* (bd, obj, tipoColeccion) {
      try {
        var coleccion = yield bd.collection(tipoColeccion);
        var resultado = coleccion.insertMany([obj]);
      } catch (err) {
        console.log("ERROR");
      }
    });

    function insertar(_x, _x2, _x3) {
      return _insertar.apply(this, arguments);
    }

    return insertar;
  }(),
  mostrarElementos: function mostrarElementos(bd, tipoColeccion) {
    return new Promise(function (resolve, reject) {
      var coleccion = bd.collection(tipoColeccion);
      coleccion.find({}).toArray(function (err, documento) {
        if (err) {
          return reject(err);
        }

        return resolve(documento);
      });
    });
  },
  buscarElemento: function buscarElemento(bd, tipoColeccion, nom) {
    return new Promise(function (resolve, reject) {
      var coleccion = bd.collection(tipoColeccion);
      coleccion.find({
        "nombre": nom
      }).toArray(function (err, elemBuscado) {
        if (err) {
          return reject(err);
        }

        console.log(elemBuscado);
        return resolve(elemBuscado);
      });
    });
  },
  eliminar: function eliminar(bd, tipoColeccion, id) {
    return new Promise(function (resolve, reject) {
      var coleccion = bd.collection(tipoColeccion);
      coleccion.deleteOne({
        "_id": (0, _mongodb.ObjectID)(id)
      }, function (err, resultado) {
        if (err) {
          return reject(err);
        } else {
          resultado = true;
          return resolve(resultado);
        }
      });
    });
  }
};
exports.crud = crud;