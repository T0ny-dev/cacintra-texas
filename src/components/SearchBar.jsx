import { useState } from "react";
import data from "../config/data.json"
import "./SearchBar.css"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = data.filter((item) => {
      return item.title.toLowerCase().includes(term.toLowerCase());
    });

    setFilteredData(filtered);
  }

  return (
    <div className="Diary">
      <div className="Diary__Search">
          <input type="text" placeholder="Buscar Evento" value={searchTerm} onChange={handleChange} />
      </div>
      <div className="Diary__Events">
        {filteredData.map((item, index) => (
          <div key={index} className="Diary__card">
            <div className="Diary__Card--content">
              <h3>Evento: "{item.title}"</h3>
              <p><img src="iconguest.png" alt="user" />Invitado: {item.guest}</p>
              <p><img src="marcador.png" alt="marcador" />Lugar: {item.place}</p>
              <p><img src="reloj.png" alt="reloj" />Fecha: {item.date}</p>
            </div>
            <div>
              <img src="Logo-Directorio.png" alt="logo" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;