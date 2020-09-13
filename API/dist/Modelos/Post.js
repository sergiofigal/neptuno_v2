"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var postSchema = new Schema({
  tipoArchivo: String,
  nombre: String,
  //categoria: {type: Schema.Types.ObjectId, ref: "Categoria"},
  categoria: String,
  usuarioCreador: {
    type: Schema.Types.ObjectId,
    ref: "Usuario"
  },
  puntaje: Number,
  fechaPost: Date,
  url: String,
  comentario: [{
    email: {
      type: Schema.Types.ObjectId,
      ref: "Usuario"
    },
    texto: String,
    fecha: Date
  }],
  cantVoto: [{
    email: {
      type: Schema.Types.ObjectId,
      ref: "Autor"
    },
    tipoVoto: Number
  }]
});

postSchema.methods.setImagen = function (nombreArchivo) {
  this.url = "http://localhost:8080/public/".concat(nombreArchivo);
};

module.exports = _mongoose.default.model('Post', postSchema);