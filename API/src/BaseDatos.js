import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/Neptuno',{
    useNewUrlParser: true,
    useCreateIndex: true
});

const coneccion = mongoose.connection;

coneccion.once('open', ()=>{
    console.log('BASE DE DATOS CONECTADA')
})