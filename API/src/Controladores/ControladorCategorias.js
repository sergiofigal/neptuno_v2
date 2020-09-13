import express from 'express';
const router = express.Router();
import Categoria from '../Modelos/Categoria'


router.get('/', async function(req, res){
    console.log('MOSTRAR CATEGORIA');
        res.json(await Categoria.find());
})

export default router;