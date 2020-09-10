"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var postSchema = new Schema({
  tipoArchivo: String,
  nombre: String,
  categoria: {
    type: Schema.Types.ObjectId,
    ref: "Categoria"
  },
  usuarioCreador: {
    type: Schema.Types.ObjectId,
    ref: "Usuario"
  },
  puntaje: Number,
  fechaPost: Date,
  comentario: [{
    nickName: {
      type: Schema.Types.ObjectId,
      ref: "Usuario"
    },
    texto: String,
    fecha: Date
  }],
  cantVoto: [{
    idUsuario: {
      type: Schema.Types.ObjectId,
      ref: "Autor"
    },
    tipoVoto: Number
  }]
});
module.exports = _mongoose.default.model('Post', postSchema);