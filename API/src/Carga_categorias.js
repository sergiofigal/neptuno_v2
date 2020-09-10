import Categoria from './Modelos/Categoria'
import { json } from 'body-parser';


const categorias = [{nombre: "Animado"},{nombre: "Informatica"},{nombre: "Deporte"},{nombre: "Anime"},{nombre: "VideoJuegos"}];


for (let i = 0; i < categorias.length; i++) {
  let categoria = new Categoria(categorias[i]);
  categoria.save((error,exito)=>{
      if(error){
          console.log("ERROR");
      }else{
          console.log("EXITO");
      }
  });
}
