import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let postSchema = new Schema ({
    
tipoArchivo: String,
    nombre: String,
    categoria: {type: Schema.Types.ObjectId, ref: "Categoria"},
    usuarioCreador: {type: Schema.Types.ObjectId, ref: "Usuario"},
    puntaje: Number,
    fechaPost: Date,
    comentario: [
      {
        nickName: {type: Schema.Types.ObjectId, ref: "Usuario"},
        texto: String,
        fecha: Date
      }
    ],
    cantVoto: [
      {
        idUsuario: {type: Schema.Types.ObjectId, ref: "Autor"},
        tipoVoto: Number
      }
    ]
  
})


module.exports = mongoose.model('Post', postSchema);