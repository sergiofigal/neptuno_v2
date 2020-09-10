"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Usuario = _interopRequireDefault(require("../Modelos/Usuario"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express.default.Router();

router.post('/login', function (req, res) {
  var body = req.body;

  _Usuario.default.findOne({
    email: body.email
  }, (erro, usuarioDB) => {
    if (erro) {
      return res.status(500).json({
        ok: false,
        err: erro
      });
    } // Verifica que exista un usuario con el mail escrita por el usuario.


    if (!usuarioDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos"
        }
      });
    } // Valida que la contraseña escrita por el usuario, sea la almacenada en la db


    console.log(usuarioDB.contrasenia);

    if (!_bcrypt.default.compareSync(body.contrasenia, usuarioDB.contrasenia)) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos"
        }
      });
    } // Genera el token de autenticación


    var token = _jsonwebtoken.default.sign({
      usuario: usuarioDB
    }, process.env.SEED_AUTENTICACION, {
      expiresIn: process.env.CADUCIDAD_TOKEN
    });

    res.json({
      ok: true,
      usuario: usuarioDB,
      token
    });
  });
});
router.post('/registrar', function (req, res) {
  console.log('REGISTRAR USUARIO');
  console.log(req.body);
  var body = req.body;
  var {
    nombre,
    apellido,
    email,
    contrasenia
  } = body;
  var usuario = new _Usuario.default({
    nombre,
    apellido,
    email,
    contrasenia: _bcrypt.default.hashSync(contrasenia, 10)
  });
  usuario.fechaRegistro = new Date();
  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      usuario: usuarioDB
    });
  });
});
router.put('/:_id', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    console.log("ACTUALIZAR UN USUARIO");
    yield _Usuario.default.findByIdAndUpdate(req.params, req.body);
    res.json({
      mensaje: 'Usuario actualizado'
    });
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    console.log('MOSTRAR USUARIOS');
    res.json(yield _Usuario.default.find());
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.get('/:_id', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    console.log('MOSTRAR UN USUARIO');
    res.json(yield _Usuario.default.findById(req.params));
  });

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.delete('/:_id', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    console.log("ELIMINAR UN USUARIO");
    yield _Usuario.default.findByIdAndDelete(req.params);
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