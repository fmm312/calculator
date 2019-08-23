import React from 'react'

let exemploVariavel = true

export default (props) => 
    <div>
        <h1>{props.value}</h1>
        <h2>{1 + 1}</h2>
        <h3>{exemploVariavel ? 'sim':'não'}</h3>
    </div>


/* -------------------------------------------------------------------------------------------------- */


/* Exemplo 2 */
/*export default () => 
    <div>
        <h1>Primeiro componente React com arrow function</h1>
        <p>adsad</p>
    </div> */


/* -------------------------------------------------------------------------------------------------- */  


/* Exemplo 1 */
/*function primeiro() {
    return <h1>Primeiro Componente React</h1>
}

export default primeiro*/