import "./Map.css"

function Map () {
  return (
    <div className="Map">
      <div className="Map__title">
        <h2>Afiliados Total de CANACINTRA</h2>
        <p>45,107 afiliados</p>
      </div>
      <div className="Map__Numbers">
        <div className="Map__card">
          <h2>14</h2>
          <h3>Sectores</h3>
        </div>
        <div className="Map__card">
          <h2>14</h2>
          <h3>Regiones</h3>
        </div>
        <div className="Map__card">
          <h2>76</h2>
          <h3>Delegaciones</h3>
        </div>
      </div>

    </div>
  );
}

export default Map;