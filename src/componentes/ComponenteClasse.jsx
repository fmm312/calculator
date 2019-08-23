import React from 'react'

// Componente baseado em classe
export default class ComponenteClasse extends React.Component {
    render() {
        return(
            <h1>{this.props.valor || 'Valor Padrão'}</h1>
        )
    }
}