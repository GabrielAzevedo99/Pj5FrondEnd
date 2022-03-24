import React from 'react';


class Copyright extends React.Component{
    render(){
        return(
            <div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>  
              <footer class="bg-dark text-light">
    <div class="container-fluid py-3">
    <div class="row">
      <div class="col-4">
        <ul class="nav flex-column">
          <li class="nav-link">Compahias perto</li>
          <li class="nav-link">Sobre</li>
          <li class="nav-link">Contato</li>
          <li class="nav-link">Reclamações</li>
        </ul>
      </div>
      <div class="col-8">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sed necessitatibus id asperiores iste fugiat,             praesentium obcaecati explicabo consequatur voluptatem eos earum blanditiis dolorem eaque veritatis libero?               Magni, nam fugiat.
        </p>
        <ul class="nav">
          <li class="nav-link" ><i class="fab fa-facebook fa-3x "></i></li>
          <li class="nav-link"><i class="fab fa-instagram fa-3x"></i></li>
          <li class="nav-link"><i class="fab fa-twitter fa-3x"></i></li>
          <li class="nav-link"><i class="fab fa-whatsapp fa-3x"></i></li>
        </ul>
      </div>
    </div>
    </div>
    <div class="text-center" >
    <h5> &copy 2022 Copyright: compahia aerea Você no cel</h5>
    </div>
  </footer>
            </div>
            )
        }
    }

            export default Copyright;