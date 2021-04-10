import React from 'react'
import './Button.css'

export default props => 
<button className= {`
  button 
  ${props.buttonIgual ? 'buttonIgual' : ''} 
  ${props.buttonZero ? 'buttonZero' : ''}
`} onClick={e => props.click && props.click(props.label) }>
  { props.label }
</button>