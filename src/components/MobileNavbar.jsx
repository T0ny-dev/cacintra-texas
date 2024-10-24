import "./MobileNavbar.css"
import React , {useState} from "react";


function MobileNavbar () {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
    <div className="MobileNavbar">
      <a href="/">
          <img src="./logo-s.svg" alt="logo" />
      </a>
      <button onClick={() => setMenuVisible(!menuVisible)} className="button_action"><img src='./iconpoints.svg'/></button>
    </div>
    {menuVisible && (
      <div className="menu-mobile">
        {
          <div className='menu_mobile_links'>
            <a href="/sobrenosotros">Sobre Nosotros</a>
            <a href="/servicios">Servicios</a>
            <a href="/contacto">Contacto</a>
            <a href="/https://cicade.network/">CICADE NETWORK</a>
            <a href="https://cicade.network/wp-content/uploads/2024/10/perfilriobravo.pdf" target="_blank">Perfil Económico de Río bravo</a>
            <a href='https://cicade.network/wp-login.php' target={'_blank'}>
              <button className='menu_visible_button'><img src='./plaforma.png' id='plataformaIcon'/>Plataforma Virtual</button>
            </a>
          </div>
        }
      </div>
    )}
    </>
  )
};

export default MobileNavbar;