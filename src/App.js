import React from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Promocao } from './View/Promocao';
import { QuemSomos } from './View/QuemSomos';
import { Home } from './components/Home'; 



 

function App() {
 
        return( 
           
    <div>
    
    
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> 
      <p>Compahia aerea você no cel</p>
      
     
    <BrowserRouter>
    <ul>
    <li><Link to="/">Ir para a pagina Inicial</Link></li>
    <li><Link to="/Promocao">Ir para a pagina de Promoções</Link></li>
    <li><Link to="/QuemSomos">Ir para a pagina de Quem Somos</Link></li>
    

</ul>


<Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/Promocao" element={ <Promocao /> } />
            <Route path="/QuemSomos" element={ <QuemSomos /> } />
            <Route element={() => <div>Page 404!</div>} />

        </Routes>
</BrowserRouter>



 </div>
   
        );
    }
    

export default App;
