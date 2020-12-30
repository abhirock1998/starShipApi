import React, { useEffect, useState } from "react";
import { PersonCard } from "../../component/card";
import "./people.css";
import { StarsWarsInstance } from "../../hooks/axios";
import{ Pagination} from "../../component";
function People() {
  const [people, setPeople] = useState([]);
  const [pageNumber,setPageNumber]=useState(1)
  useEffect(() => {
    StarsWarsInstance.get(`people/?page=${pageNumber}`)
      .then((res) => setPeople(res.data))
      .catch((e) => console.log(e));
  }, [pageNumber])

const handleClick=page=> {
  setPageNumber(page)
}

  return (
    <div className="people">
     <div className="people__container">
     {people?.results?.map((person) => (
        <PersonCard
          height={person.height}
          mass={person.mass}
          name={person.name}
          skinColor={person.skin_color}
          haircolor={person.hair_color}
          eyeColor={person.eye_color}
          birth={person.birth_year}
          gender={person.gender}
          films={person.films?.length}
          species={person.species?.length}
          vehicles={person.vehicles?.length}
          starship={person.starships?.length}
        />
      ))}
     </div>
     <Pagination click={handleClick} totalNumberOfItem={people?.count} itemPerPage={10}  />
    </div>
  );
}

export default People;
