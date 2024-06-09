import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Erro from './pages/Erro';
import Home from './pages/home';
import Filme from './pages/Filme';
import Header from './componets/Header';
import Favoritos from './pages/Favoritos';


function RoutesApp(){
  return(
    <BrowserRouter>
    <Header/>
    <Routes>  
        <Route path="/" element={<Home/>}/>
        <Route path="filme/:id" element={<Filme/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>


      <Route path="*" element={<Erro />} />
    </Routes>
    
    
    
    </BrowserRouter>




    
  );
}

export default RoutesApp;