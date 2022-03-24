import React from 'react';
import Copyright from './Copyright';
import { Container } from "react-bootstrap";
import Login from "./Login";
import Logout from "./Logout";
import User from "./User";


export const Home = () => (

            <div>
           <Container>
        <Login />
        <br />
        <User />
        <br />
        <Logout />
      </Container> 
            <title>Home</title>
               

<center>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
                
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>  
              <h1>Compahia aerea</h1>
                <center><img src="https://t.ctcdn.com.br/Snwa745jN716N00TY8zxI_W22XE=/512x288/smart/i321185.jpeg" class="img-fluid" alt="Imagem responsiva"></img></center>
                <br></br>
                <p>Porém, não estamos começando do zero. Temos trabalhado há anos com sustentabilidade e já desenvolvemos projetos que nos trouxeram muito orgulho. Todas as ações e decisões da LATAM Airlines estão baseadas nos Objetivos de Desenvolvimento Sustentável (ODS) da Organização das Nações Unidas (ONU), desde o lançamento da agenda global em 2015, e  atendem às necessidades climáticas, sociais e de saúde, entre outras.</p>
               
               <h2>Por que devo comprar uma passagem aérea na Decolar?</h2>
               
               
            <p>Na Decolar você pode comprar passagens aéreas internacionais e nacionais pelo melhor preço. Encontre voos para viajar para onde quiser e faça com que o céu seja o seu limite. Temos uma grande variedade de companhias aéreas, passagens de avião e destinos. Confira as melhores ofertas e se prepare para viajar!</p>

<h2>O que preciso saber sobre a bagagem?</h2>

<p>Algumas companhias oferecem passagens aéreas muito econômicas, mas que incluem apenas bagagem de mão. Antes de comprar a sua passagem aérea confira as informações sobre bagagem e descubra quantas malas você pode levar. Na Decolar oferecemos diversas opções de serviços para que você tenha uma ótima experiência de viagem.</p>

<h2>Onde confiro a informação do meu voo?</h2>

<p>Ao pesquisar passagens aéreas internacionais ou nacionais, você pode ver a informação sobre os horários de saída e chegada de cada uma, além dos aeroportos, duração da viagem, número e tempo de escalas, classe da cabine e a bagagem incluída. Veja também o preço final das suas passagens de avião e as formas de pagamento disponíveis.</p>


<h2>Dicas para comprar passagens aéreas</h2>
<p>Na hora de pesquisar suas passagens aéreas, lembre-se de conferir o aeroporto de origem e de destino, a relação preço/duração do voo e a bagagem incluída na sua tarifa. Algumas passagens de avião baratas têm muitas escalas e não incluem bagagem. Se o seu voo tiver escalas, verifique se você precisa trocar de aeroporto.</p>
<br></br>
    
              
</center>

<Copyright />
            </div>
        );
        

export default Home;