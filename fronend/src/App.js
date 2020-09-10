import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import PaginaNoRegistrado from './Componentes/PaginaNoRegistrado'

import Registrar from './Componentes/Registrar'
import NuevoPost from './Componentes/NuevoPost'
import ListarPost from './Componentes/ListarPosts'
import Categorias from './Componentes/Categorias'
function App() {
  return (
    <Router>
      <Route path="/"  component={PaginaNoRegistrado} />
      <Route path="/" exact component={ListarPost} />
      <Route path="/categorias" component={Categorias} />
      <Route path="/nuevopost" component={NuevoPost} />
      <Route path="/registrar" component={Registrar} />
     
    </Router>

  );
}

export default App;
