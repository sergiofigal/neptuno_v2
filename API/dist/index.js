"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _ControladorUsuarios = _interopRequireDefault(require("./Controladores/ControladorUsuarios"));

var _ControladorCategorias = _interopRequireDefault(require("./Controladores/ControladorCategorias"));

var _ControladorPosts = _interopRequireDefault(require("./Controladores/ControladorPosts"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./configuracion');

require('./BaseDatos');

require('./Carga_categorias');

var PORT = 8080;
var app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_bodyParser.default.json());
app.use('/usuarios', _ControladorUsuarios.default);
app.use('/categoria', _ControladorCategorias.default);
app.use('/post', _ControladorPosts.default);
app.use('/public', _express.default.static("/home/nicocastillo/Escritorio/Prueba/API/src/Contenedor"));
app.get('/', function (req, res) {
  res.json({
    mensaje: 'Bienvenido al servidor de Neptuno'
  });
});
app.listen(PORT);
console.log("Express started on port ".concat(PORT));