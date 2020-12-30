import React from "react";
import "./species-card.css";
function SpeciesCard({title,classification,desgination,height,eye,skin,lang,lifespan}) {
  return (
    <div className="speciesCard">
      <div className="speciescad__detaials">
        <p>
          <i>Name :</i>
          {title}
        </p>
        <p>
          <i>Calssification :</i>
          {classification}
        </p>

        <p>
          <i>Designation :</i>
          {desgination}
        </p>
        <p>
          <i>Avg. height :</i>
          {height}
        </p>
        <p>
          <i>Skin Color :</i>
          {skin}
        </p>
        <p>
          <i>Eye Color :</i>
          {eye}
        </p>
        <p>
          <i>Avg. lifespan :</i>
          {lifespan}
        </p>
        <p>
          <i>Language :</i>
          {lang}
        </p>
      </div>
    </div>
  );
}

export default SpeciesCard;
