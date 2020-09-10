"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uniqueValidator = require('mongoose-unique-validator');

var Schema = _mongoose.default.Schema;
var usuarioSchema = new Schema({
  nombre: String,
  apellido: String,
  email: String,
  contrasenia: String,
  categoriaDestacada: [{}],
  fechaRegistro: Date,
  voto: [{
    type: Schema.ObjectId,
    ref: "Post"
  }],
  postCreado: [{
    type: Schema.ObjectId,
    ref: "Post"
  }]
});
usuarioSchema.plugin(uniqueValidator, {
  message: '{PATH} debe de ser único'
});
module.exports = _mongoose.default.model('Usuario', usuarioSchema);