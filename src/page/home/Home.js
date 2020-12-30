import { Select, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
function Home() {
  const history = useHistory();
  const [item, setItem] = useState("planets");
  const handleSelect = (e) => {
    const value = e.target.value;
    switch (value) {
      case "people":
        history.push(`/people`);
        break;
      case "films":
        history.push("/films");
        break;
        case "species":history.push("/species");
        break;
        case "starships":history.push("/starships");
        break;
        case "vehicles":history.push("/vehilces");
        break;
      default:
        history.push("/");
        break;
    }
    setItem(value);
  };
  return (
    <div className="home">
      <div className="home__content">
        <blockquote>
          <i>“In my experience there is no such thing as luck.”</i>
        </blockquote>
        <p> – Obi-Wan Kenobi</p>
        <Select value={item} variant="outlined" onChange={handleSelect}>
          
          <MenuItem value="people"> People</MenuItem>
          <MenuItem value="films">Films</MenuItem>
          <MenuItem value="planets">Planets</MenuItem>
          <MenuItem value="species">Species</MenuItem>
          <MenuItem value="starships">StarShips</MenuItem>
          <MenuItem value="vehicles">Vehicles</MenuItem>
        </Select>
      </div>
    </div>
  );
}

export default Home;
