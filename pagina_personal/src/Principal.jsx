import React, { useEffect } from 'react'

const Pagina = () => {
   
  //Hacer una div que tenga una animacion de bienvenida
  // css
  const body={
    boxSizing: "border-box",
    display: "flex",
    backgroundColor: "#e2a9e5",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Open Sans",
    fontSize: "40px",
    height: "100vh"
  }

    return (
      <div style={body}>
        Holi q
      </div>
    )
}

export default Pagina