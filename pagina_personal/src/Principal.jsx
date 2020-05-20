import React, { useEffect } from 'react'
import './style.css';

const Pagina = () => {

    return (
      <div>
        <div className="bienvenida">
          <h1 className="accessibility-animation">
            <span className="end-letters">A</span><span className="middle-letters">bril</span><span className="alternate-middle-letters">15</span><span className="end-letters">P</span><span className="middle-letters">alencia</span>
          </h1>
        </div>
        <div className="descripcion">
          <p>Holi, mi nombre es Abril Palencia. Tengo 21 años de edad y estudio<br></br> <b>Ingeniería en Ciencia de la Computación y TI </b>
           en la Universidad del Valle de Guatemala. <br></br>Me gusta mucho bailar salsa y bachata. <br></br>Soy una persona muy sociable y alegre.</p>
          <div className="redes">
            <a href="https://www.instagram.com/_abrilpal/" className="link"><img src="/src/instagram.png"></img><span className="sp">Instagram</span></a>
            <a href="https://github.com/AbrilPal" className="link"><img src="/src/github.png"></img><span className="sp">Github</span></a>
            <a href="https://www.linkedin.com/in/abril-palencia-517a411a7/" className="link"><img src="/src/Linkedin.png"></img><span className="sp">Linkedin</span></a>
          </div>
        </div>
      </div>
    )
}

export default Pagina