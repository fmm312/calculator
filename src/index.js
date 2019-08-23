import React from 'react'
import ReactDOM from 'react-dom'
/*import PrimeiroComponente from './componentes/PrimeiroComponente'
import  {CompA, CompB} from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos'
import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'
import ComponenteComFuncao from './componentes/ComponenteComFuncao'
import Pai from './componentes/Pai'
import ComponenteClasse from './componentes/ComponenteClasse'*/
import Contador from './componentes/Contador'

ReactDOM.render (
    <Contador numero={0} />    

    /*
    <ComponenteClasse valor=""/>
    */

    /*
    <Pai />
    */

    /*
    <ComponenteComFuncao />
    */

    /*<div>
        <Familia> 
            <Membro nome="João" sobrenome="Silva"/>
            <Membro nome="Maria" sobrenome="Silva"/>
            <Membro nome="Francisco" sobrenome="Silva"/>
        </Familia>

        <Familia> 
            <Membro nome="Raimundo" sobrenome="Andrade"/>
            <Membro nome="Antonia" sobrenome="Andrade"/>
            <Membro nome="José" sobrenome="Andrade"/>
        </Familia>
    </div>*/,
    document.getElementById('root')
)


/* Exemplo 4 */
/*ReactDOM.render(
    <div>
        <PrimeiroComponente value="Hello World" />
        <CompA value="adasd" />
        <CompB value="adasd" />
        <MultiElementos value="sssssssssss"/>
    </div>,
    document.getElementById('root')
)*/
 

/* Exemplo 1 */
/*ReactDOM.render('Hello World', document.getElementById('root'))*/


/* Exemplo 2 */
/*ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'))*/


/* Exemplo 3 */
/*ReactDOM.render(
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>, 
    document.getElementById('root')
)*/