"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _crud = require("../crud");

var _index = require("../index");

var _Usuario = _interopRequireDefault(require("../Clases/Usuario"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('/', function (req, res) {
  console.log('ENTRO');
  var usuario = new _Usuario.default(req.body);
  usuario.fechaRegistro = new Date();
  console.log(usuario);

  _crud.crud.insertar(_index.bd, usuario, 'Usuarios');

  res.json(req.body);
});
router.put('/', function (req, res) {});
router.get('/', function (req, res) {
  if (req.query.nombre !== undefined) {
    console.log('MOSTRAR UN USUARIO');

    _crud.crud.buscarElemento(_index.bd, 'Usuarios', req.query.nombre).then(alumno => {
      res.json({
        alumno
      });
    });
  } else {
    console.log('MOSTRAR USUARIOS');

    _crud.crud.mostrarElementos(_index.bd, 'Usuarios').then(listaAlumnos => {
      res.json(listaAlumnos);
    });
  }
});
router.delete('/:id', function (req, res) {
  console.log("ELIMINAR UN USUARIO");

  _crud.crud.eliminar(_index.bd, 'Usuarios', req.params.id).then(resultado => {
    res.json({
      ok: resultado
    });
  });
});
var _default = router;
exports.default = _default;