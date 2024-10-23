import React, { useState } from 'react';
import "./Navbar.css";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [investigacionesVisible, setInvestigacionesVisible] = useState(false);

  return (
    <div className="Navbar">
      <div className="Navbar__Links">
        <a href="/">
          <img src="./logo-s.svg" alt="logo" className='logo' />
        </a>
        <a href="/sobrenosotros">Sobre Nosotros</a>
        <a href="/servicios">Servicios</a>
        <a href="/contacto">Contacto</a>
        {/* Nuevo enlace para Investigaciones */}
        <div className="Investigaciones">
          <a onClick={() => setInvestigacionesVisible(!investigacionesVisible)} className="button_investigaciones">
            Investigaciones
          </a>
          {investigacionesVisible && (
            <ul className="menu-investigaciones">
              <li>
                <a href="https://cicade.network/wp-content/uploads/2024/10/perfilriobravo.pdf" className="investigacion_link" target='_blank'>
                  Perfil Riobravo
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="Navbar__button">
        <a href="https://cicade.network/">
          <button className="button_primary">CICADE NETWORK</button>
        </a>
        <div>
          <button onClick={() => setMenuVisible(!menuVisible)} className="button_action">
            <img src='./iconpoints.svg' />
          </button>
          {menuVisible && (
            <div className="menu-flotante">
              <div className='menu__visible'>
                <a href='https://cicade.network/wp-login.php' target={'_blank'}>
                  <button className='menu_visible_button'>
                    <img src='./plaforma.png' id='plataformaIcon' />Plataforma Virtual
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
