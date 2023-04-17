import "./Navbar.css"

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__Links">
        <a href="/">
          <img src="logo.svg" alt="logo" />
        </a>
        <a href="sobrenosotros">Sobre Nosotros</a>
        <a href="/servicios">Servicios</a>
        <a href="/agenda">Agenda</a>
        <a href="/contacto">Contacto</a>
      </div>
      <div className="Navbar__button">
        <a href="/sermiembro">
          <button className="button_primary">Ser Socio!</button>
        </a>
        <a href="#">Iniciar Sesion</a>
        <div className="Navbar__icon">
          <img src="iconpoints.svg" alt="icon" />
        </div>
        
      </div>
    </div>
  )
}

export default Navbar;