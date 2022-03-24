import React from 'react';

export default class Ofertas extends React.Component{
    constructor(props){
        super(props)
        this.oferta='Promocao'
        this.state={
            ValorTotal:false,
            QuandasPessoas:2,
        }
    }
    SemCom(){
        this.setState({Com:!this.state.Com})
    }
    render(){
        return(
    <div>

<h4>Oferta de São Paulo para Minas Gerais</h4>
<p>Atenção somente para duas passagens</p>
<p>Oferta {this.oferta}</p>
<p>Preço com e sem desconto: {this.state.Com ? '150' : '260' }</p>
<p>Quandas Pessoas para promoção: {this.state.QuandasPessoas}</p>
<button onClick={() => this.SemCom()}>
    {this.state.Com ? 'UmaPassagem' : 'DuasPassagens'}
</button>
</div>

        )
    }  
}