"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var categoriaSchema = new Schema({
  nombre: String
});
module.exports = _mongoose.default.model('Categoria', categoriaSchema);