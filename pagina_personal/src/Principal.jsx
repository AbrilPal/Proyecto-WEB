import React, { useEffect } from 'react'
import './style.css';

const Pagina = () => {

  const cartas = [
    {id: 1, imagen: "Proyecto de Base de Datos", des: ""},
    {id: 2, imagen: "Juego de Memoria", des: "Un siemple juego de memoria con 16 cartas hecho con React."},
    {id: 3, imagen: "Juego de Laberinto", des: "Un laberinto Random jalado del servidor hecho con React."},
    {id: 4, imagen: "Imagen puro CSS", des: "Una imagen de un panda hecho solamente con CSS."},
  ]
  const Carta = ({texto, titulo, descrip}) => {
    
    return (
    <div className="style_carta" >

      <div className="thefront"><h1>{texto}</h1>
      </div>
        <div className="theback">
          <h4>{titulo}</h4>
          <p>{descrip}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="bienvenida">
        <h1 className="accessibility-animation">
          <span className="end-letters">A</span><span className="middle-letters">bril</span><span className="alternate-middle-letters">15</span><span className="end-letters">P</span><span className="middle-letters">alencia</span>
        </h1>
      </div>
      <div className="descripcion">
        <p>Algo de mi...
        <br></br>
        <br></br>
        <br></br>
          Holi, mi nombre es Abril Palencia. Tengo 21 años de edad y estudio<br></br> <b>Ingeniería en Ciencia de la Computación y TI </b>
          en la Universidad del Valle de Guatemala. <br></br>Me gusta mucho bailar. <br></br>Soy una persona muy sociable y alegre.</p>
        <div className="redes">
          <a href="https://www.instagram.com/_abrilpal/" className="link"><img src="insta.png" className="logo"></img><span className="sp">Instagram</span></a>
          <a href="https://github.com/AbrilPal" className="link"><img src="github.png" className="logo"></img><span className="sp">Github</span></a>
          <a href="https://www.linkedin.com/in/abril-palencia-517a411a7/" className="link"><img src="Linkedin.png" className="logo2"></img><span className="sp">Linkedin</span></a>
        </div>
      </div>
      <div className="titulo"><br></br><br></br>Proyectos...</div>
      <div className="contenedor">
          {cartas.map((cartass) =><Carta texto = "</3" key={cartass.id} titulo={cartass.imagen} descrip={cartass.des} />)}
      </div>
    </div>
  )
}

export default Pagina