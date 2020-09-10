"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.connect('mongodb://localhost/Neptuno', {
  useNewUrlParser: true,
  useCreateIndex: true
});

var coneccion = _mongoose.default.connection;
coneccion.once('open', () => {
  console.log('BASE DE DATOS CONECTADA');
});