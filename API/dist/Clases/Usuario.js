"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var usuarioSchema = new Schema({
  nombre: String,
  apellido: String,
  nickName: String,
  email: String,
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
module.exports = _mongoose.default.model('Usuario', usuarioSchema);