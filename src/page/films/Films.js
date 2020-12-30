import React, { useState, useEffect } from "react";
import "./films.css";
import { FilmCard } from "../../component/card";
import { StarsWarsInstance } from "../../hooks/axios";

function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    StarsWarsInstance.get("films/")
      .then((res) => setFilms(res.data.results.map((item) => item)))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="films">
      {films.map((film) => (
        <FilmCard
          director={film?.director}
          producer={film?.producer}
          release={film?.release_date}
          key={film?.episode_id}
          description={film?.opening_crawl}
          movieTitle={film?.title}
          vehicles={film?.vehicles.length}
          characters={film?.characters.length}
          planets={film?.planets.length}
          species={film?.species.length}
          starships={film?.starships.length}
        />
      ))}
    </div>
  );
}

export default Films;
