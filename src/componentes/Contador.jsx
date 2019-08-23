import React from 'react'

export default class Contador extends React.Component {
    state = {
        numero: this.props.numero
    }
    
    maisUm = () => {
        this.alterarNumero(1)
        //this.setState({ numero: this.state.numero + 1 })
        //this.props.numero = this.props.numero + 1
    }

    menosUm = () => {
        this.alterarNumero(-1)
        //this.setState({ numero: this.state.numero - 1 })
        //this.props.numero = this.props.numero - 1
    }
    
    alterarNumero = (diferenca) => {
        this.setState({ numero: this.state.numero + diferenca})
    }
    
    render () {        
        return(
            <div>
                <h2>Número: {this.state.numero}</h2>
                <button onClick={this.maisUm}>Aumentar</button>
                <button onClick={this.menosUm}>Diminuir</button>
                <button onClick={() => this.alterarNumero(10)}>Aumentar 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Diminuir 10</button>
            </div>
        )
    }

    //Solução this 01
    /*constructor(props) {
        super(props)
        this.maisUm = this.maisUm.bind(this)        
    }*/

}