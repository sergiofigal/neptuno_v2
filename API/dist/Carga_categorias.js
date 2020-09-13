"use strict";

var _Categoria = _interopRequireDefault(require("./Modelos/Categoria"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categorias = [{
  nombre: "Animado"
}, {
  nombre: "Informatica"
}, {
  nombre: "Deporte"
}, {
  nombre: "Anime"
}, {
  nombre: "VideoJuegos"
}];

for (var i = 0; i < categorias.length; i++) {
  var categoria = new _Categoria.default(categorias[i]);
  categoria.save((error, exito) => {
    if (error) {
      console.log("ERROR");
    } else {
      console.log("EXITO");
    }
  });
}