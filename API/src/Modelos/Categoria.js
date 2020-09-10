import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    nombre: String
})

module.exports = mongoose.model('Categoria', categoriaSchema);