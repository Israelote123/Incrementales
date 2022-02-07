import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import PublicarPage  from "./pages/PublicarPage";
import  {AgregarAmigos}  from "./pages/AgregarAmigos";
import { Chismetecla } from "./pages/Chismetecla";
import { Amigos } from "./pages/Amigos";
import { SearchPerfil } from './pages/SearchPerfil';
import { PerfilPage } from "./pages/PerfilPage";
import { Configuration } from './pages/Configuration';
import {MostrarSolicitudes} from './pages/MostrarSolicitudes'
import { Provider } from "react-redux";
import { store } from "./redux/store"; 
import Nav from './components/Nav/Nav'

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Nav /><br />  
        <Routes>
          <Route path="/" element={<Login  />} />
          <Route path="/new-user" element={<Register/>} />
          <Route path="/publicar" element={<PublicarPage/> }/>
          <Route path="/agregarAmigos" element={<AgregarAmigos  /> }/>
          <Route path="/chismetecla" element={<Chismetecla/> }/>
          <Route path="/amigos" element={<Amigos/>}/>
          <Route path="/busquedaPerfil" element={<SearchPerfil/>}/>
          <Route path="/perfil" element={<PerfilPage/>}/>
          <Route path="/configuracion" element={<Configuration/>}/>
          <Route path="/notificaciones" element={<MostrarSolicitudes/>}/>
        </Routes>
    </BrowserRouter>
  </Provider>,
   document.getElementById('root')
  );

  /*ReactDOM.render(
    <ThemeContext.Provider value={themes.light}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login  />} />
            <Route path="/new-user" element={<Register/>} />
            <Route path="/publicar" element={<PublicarPage/> }/>
            <Route path="/agregarAmigos" element={<AgregarAmigos  /> }/>
            <Route path="/chismetecla" element={<Chismetecla/> }/>
            <Route path="/amigos" element={<Amigos/>}/>
            <Route path="/busquedaPerfil" element={<SearchPerfil/>}/>
            <Route path="/perfil" element={<PerfilPage/>}/>
            <Route path="/configuracion" element={<Configuration/>}/>
            
            </Routes>
      </BrowserRouter>
      </ThemeContext.Provider>,
    document.getElementById('root')
    );*/




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
