import {Link} from 'react-router-dom';
import './erro.css';


function Erro(){
  return(
    <div className="erro-not-found">

      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Link to="/">Voltar para a página principal</Link>


    </div>
    
  )
}

export default Erro;