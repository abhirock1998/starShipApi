import React, { useEffect, useState } from "react";
import { Pagination } from "../../component";
import { StarShipCard } from "../../component/card";
import { StarsWarsInstance } from "../../hooks/axios";
import "./startShip.css";
function StarShip() {
  const [starShips, setStarShips] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  useEffect(() => {
    StarsWarsInstance.get(`starships/?page=${pageNumber}`)
      .then((res) => setStarShips(res.data))
      .catch((e) => console.log(e));
  }, [pageNumber]);
  const handleClick = (page) => {
    setpageNumber(page);
  };
  return (
    <div className="starShip">
      <div className="starShip__container">
        {starShips?.results?.map((starShip) => (
          <StarShipCard
          key={starShip.name}
            starShipName={starShip.name}
            model={starShip.model}
            mfg={starShip.manufacturer}
            cost={starShip.cost_in_credits}
            length={starShip.length}
            maxSpeed={starShip.max_atmosphere_speed}
            crew={starShip.crew}
            passengers={starShip.passengers}
            cargo={starShip.cargo_capacity}
            rating={starShip.hyperdrive_rating}
            mglt={starShip.MGLT}
            StarhipClass={starShip.starship_class}
          />
        ))}
      </div>
      <Pagination
        click={handleClick}
        itemPerPage={10}
        totalNumberOfItem={starShips?.count}
      />
    </div>
  );
}

export default StarShip;
