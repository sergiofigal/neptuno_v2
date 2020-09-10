import mongoose from 'mongoose';
var uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;
let usuarioSchema = new Schema({
      nombre: String,
      apellido: String,
      email: String,
      contrasenia: String,
      categoriaDestacada:[{}],
      fechaRegistro: Date,
      voto: [{type: Schema.ObjectId,
              ref: "Post"}],
      postCreado:[{
            type: Schema.ObjectId,
                  ref: "Post"}]
    
});

   usuarioSchema.plugin(uniqueValidator, {
      message: '{PATH} debe de ser único'
  })

module.exports = mongoose.model('Usuario', usuarioSchema);