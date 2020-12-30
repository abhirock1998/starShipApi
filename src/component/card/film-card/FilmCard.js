import React from "react";
import Spec from "../../spec/Spec";
import "./film-card.css";
function FilmCard({
  movieTitle,
  description,
  director,
  producer,
  release,
  characters,
  planets,
  vehicles,
  starships,
  species,
}) {
  return (
    <div className="filmCard">
      <h1>{movieTitle}</h1>
      <p><span>synposis :</span>{description}</p>
      <p>
        <span>Dircetor : </span>
        {director}
      </p>
      <p>
        <span>Producer : </span>
        {producer}
      </p>
      <p>
        <span>Release date : </span>
        {release}
      </p>
      <div className="filmCard__stats">
        <Spec title=" Characters" value={characters} />
        <Spec title="Planets" value={planets} />
        <Spec title="StarShips" value={starships} />
        <Spec title="Vehicles" value={vehicles} />
        <Spec title="Species" value={species} />
      </div>
    </div>
  );
}

export default FilmCard;
