import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import PaginaNoRegistrado from './Componentes/PaginaNavNoRegistrado';
//import PaginaRegistrado from './Componentes/PaginaNavRegistrado'
import Registrar from './Componentes/Registrar'
import NuevoPost from './Componentes/NuevoPost'
import ListarPost from './Componentes/ListarPosts'
import Categorias from './Componentes/Categorias'
import Login from './Componentes/Login'
import Logout from './Componentes/Logout'
import PrivateRoute from './Componentes/RoutePrivado';
function App() {
  return (

    <Router>

      <Route path="/" component={PaginaNoRegistrado} />
      <Route path="/" exact component={ListarPost} />
      <Route path="/categorias" component={Categorias} />
      <Route path="/login" component={Login} />
      <Route path="/registrar" component={Registrar} />
      <PrivateRoute path="/nuevoPost" exact component={NuevoPost} />
      <PrivateRoute path="/logout" exact component={Logout} />


    </Router>


  );
}

export default App;
