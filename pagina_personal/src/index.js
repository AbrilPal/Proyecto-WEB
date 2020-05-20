import React from 'react'
import ReactDOM from 'react-dom'
import Pagina from './Principal.jsx'

const DOMReal = document.getElementById('principal')
const DOMVirtual = <Pagina />
ReactDOM.render(
  DOMVirtual, DOMReal,
)