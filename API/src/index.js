import express from 'express';
import bodyParser from 'body-parser';
import usuariosRoutes from './Controladores/ControladorUsuarios';
import categoriaRoutes from './Controladores/ControladorCategorias';
import postRoutes from './Controladores/ControladorPosts';
import cors from 'cors';
require('./configuracion');
require('./BaseDatos');
require('./Carga_categorias');


const PORT = 8080;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/usuarios', usuariosRoutes);
app.use('/categoria', categoriaRoutes);
app.use('/post', postRoutes);



app.get('/', function (req, res) {

  res.json({ mensaje: 'Bienvenido al servidor de Neptuno' });
});

app.listen(PORT);
console.log(`Express started on port ${PORT}`);


