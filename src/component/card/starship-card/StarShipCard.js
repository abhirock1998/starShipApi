import React from "react";
import Spec from "../../spec/Spec";
import "./star-ship-card.css";
function StarShipCard({
  starShipName,
  model,
  mfg,
  cost,
  length,
  maxSpeed,
  crew,
  passengers,
  cargo,
  life,
  rating,
  mglt,
  StarhipClass,
  vehicle=false,
  vehicleClass
}) {
  return (
    <div className="starShipCard">
      <h2>
        <span>Name : </span>
        {starShipName}
      </h2>
      <h4>
        <span>Model : </span>
        {model}
      </h4>
      <h6>
        <span>manufacturer : </span>
        {mfg}
      </h6>
      <div className="starShipCard__content">
        <Spec title="Cost" value={cost} />
        <Spec title="Length" value={length} />
        <Spec title="Max Speed" value={maxSpeed} />
        <Spec title="Crew capacity" value={crew} />
        <Spec title="Passengers" value={passengers} />
        <Spec title="Cargo capacity" value={cargo} />
        <Spec title="Consuamble" value={life} />
        <Spec title="Hyperdive Rating" value={rating} />
        <Spec title="MGLT" value={mglt} />
        <Spec title="Starship Class" value={StarhipClass} />
        {vehicle&&  <Spec title="Vehicle class" value={vehicleClass} />}
      </div>
    </div>
  );
}

export default StarShipCard;
