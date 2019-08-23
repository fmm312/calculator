import React from 'react'

/* Solução 3 */
export default (props) => [
    <h1>Exemplo 1 {props.value}</h1>,
    <h1>Exemplo 2</h1>,
    <h1>Exemplo 3</h1>,
    <h1>Exemplo 4</h1>
]     

/* -------------------------------------------------------------------------------------------------- */

/* Solução 2 */
/*
export default (props) =>
    <React.Fragment> 
        <h1>Exemplo 1 {props.value}</h1>
        <h1>Exemplo 2</h1>
        <h1>Exemplo 3</h1>
        <h1>Exemplo 4</h1>
    </ React.Fragment> 
*/

/* -------------------------------------------------------------------------------------------------- */

/* Solução 1. Mais usada! */
/*export default (props) =>
    <div>
        <h1>Exemplo 1 {props.value}</h1>
        <h1>Exemplo 2</h1>
        <h1>Exemplo 3</h1>
        <h1>Exemplo 4</h1>
    </div>
*/