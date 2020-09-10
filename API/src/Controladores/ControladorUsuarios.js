import express from 'express';
import Usuario from '../Modelos/Usuario'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = express.Router();


router.post('/login', function (req, res) {
  const body = req.body;
  Usuario.findOne({ email: body.email }, (erro, usuarioDB) => {
    if (erro) {
      return res.status(500).json({
        ok: false,
        err: erro
      })
    }
    // Verifica que exista un usuario con el mail escrita por el usuario.
    if (!usuarioDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos"
        }
      })
    }
    // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
    console.log(usuarioDB.contrasenia)


    if (!bcrypt.compareSync(body.contrasenia, usuarioDB.contrasenia)) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos"
        }
      });
    }
    // Genera el token de autenticación
    let token = jwt.sign({
      usuario: usuarioDB,
    }, process.env.SEED_AUTENTICACION, {
      expiresIn: process.env.CADUCIDAD_TOKEN
    })
    res.json({
      ok: true,
      usuario: usuarioDB,
      token,
    })
  })
});



router.post('/registrar', function (req, res) {
  console.log('REGISTRAR USUARIO')
  console.log(req.body);
  let body = req.body;
  let { nombre, apellido, email, contrasenia } = body;
  let usuario = new Usuario({
    nombre,
    apellido,
    email,
    contrasenia: bcrypt.hashSync(contrasenia, 10)

  });
  usuario.fechaRegistro = new Date();


  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    res.json({
      usuario: usuarioDB
    });
  })
});


router.put('/:_id', async function (req, res) {
  console.log("ACTUALIZAR UN USUARIO")
  await Usuario.findByIdAndUpdate(req.params, req.body);
  res.json({ mensaje: 'Usuario actualizado' });
});


router.get('/', async function (req, res) {
  console.log('MOSTRAR USUARIOS');
  res.json(await Usuario.find());
});

router.get('/:_id', async function (req, res) {
  console.log('MOSTRAR UN USUARIO');
  res.json(await Usuario.findById(req.params));
});




router.delete('/:_id', async function (req, res) {
  console.log("ELIMINAR UN USUARIO")
  await Usuario.findByIdAndDelete(req.params);
  res.json({ mensaje: 'Usuario eliminado' });
});

export default router;
