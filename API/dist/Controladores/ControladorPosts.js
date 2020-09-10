"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Post = _interopRequireDefault(require("../Modelos/Post"));

var _Usuario = _interopRequireDefault(require("../Modelos/Usuario"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express.default.Router();

router.post('/:_id/nuevopost', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    //Crear nuevo post
    var post = new _Post.default(req.body);
    post.fechaPost = new Date();
    post.puntaje = 0; //Buscar el usuario que creo el post

    console.log(req.params);
    var usuario = yield _Usuario.default.findById(req.params);
    post.usuarioCreador = usuario;
    yield post.save();
    res.json(post);
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    console.log("MOSTRAR POSTS");
    res.json(yield _Post.default.find());
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.get('/:categoria', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    console.log("MOSTRAR POSTS");
    res.json(yield _Post.default.find(req.params));
  });

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.delete('/:_id/eliminarpost', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    console.log("ELIMINAR UN POST");
    yield _Post.default.findByIdAndDelete(req.params);
    res.json({
      mensaje: 'Usuario eliminado'
    });
  });

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;