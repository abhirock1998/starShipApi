import React,{useState,useEffect} from 'react'
import { Pagination } from '../../component';
import { StarShipCard } from '../../component/card';
import { StarsWarsInstance } from '../../hooks/axios';
import './vehicle.css';
function Vehicle() {
    const [vehicles, setStarShips] = useState([]);
    const [pageNumber, setpageNumber] = useState(1);
    useEffect(() => {
      StarsWarsInstance.get(`vehicles/?page=${pageNumber}`)
        .then((res) => setStarShips(res.data))
        .catch((e) => console.log(e));
    }, [pageNumber]);
    const handleClick = (page) => {
      setpageNumber(page);
    };
    return (
        <div className="vehicles">
            <div className="vehicles__container">
{vehicles?.results?.map((vehicle) => (
          <StarShipCard
          key={vehicle.name}
            starShipName={vehicle.name}
            model={vehicle.model}
            mfg={vehicle.manufacturer}
            cost={vehicle.cost_in_credits}
            length={vehicle.length}
            maxSpeed={vehicle.max_atmosphere_speed}
            crew={vehicle.crew}
            passengers={vehicle.passengers}
            cargo={vehicle.cargo_capacity}
            rating={vehicle.hyperdrive_rating}
            mglt={vehicle.MGLT}
            StarhipClass={vehicle.starship_class}
            vehicle={true}
            vehicleClass={vehicle.vehicle_class}
          />
        ))}
            </div>
            <Pagination click={handleClick} itemPerPage={10} totalNumberOfItem={vehicles?.count} />
        </div>
    )
}

export default Vehicle
