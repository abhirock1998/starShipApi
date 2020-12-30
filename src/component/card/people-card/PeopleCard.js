import React from "react";
import Spec from "../../spec/Spec";
import "./people-card.css";
function PeopleCard({
  name,
  height,
  mass,
  haircolor,
  eyeColor,
  birth,
  gender,
  skinColor,
  films,species,vehicles,starship
}) {
  return (
    <div className="peopleCard">
      <div className="peopleCard__details">
        <h1> {name} </h1>
        <div className="peopleCard__detailsSpec">
          <Spec title="Height" value={height} />
          <Spec title="Body Weight" value={mass} />
          <Spec title="HairColor" value={haircolor} />
          <Spec title="Skin Color" value={skinColor} />
          <Spec title="Eye Color" value={eyeColor} />
          <Spec title="Birth Year" value={birth} />
          <Spec title="Gender" value={gender} />
          <Spec title="Films" value={films} />
          <Spec title="Species" value={species} />
          <Spec title="Vehicles" value={vehicles} />
          <Spec title="Satrships" value={starship} />
        </div>
      </div>
    </div>
  );
}

export default PeopleCard;
