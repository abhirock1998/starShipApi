import React, { useEffect, useState } from 'react'
import {SpecieCard} from '../../component/card';
import {StarsWarsInstance} from  "../../hooks/axios";
import {Pagination} from '../../component'
import './species.css';
function Species() {
    const [species,setSpecies]=useState([]);
   const [pageNumber,setPageNumber]=useState(1)
        useEffect(() => {
            StarsWarsInstance.get(`species/?page=${pageNumber}`)
              .then((res) => setSpecies(res.data.results.map((item) => item)))
              .catch((e) => console.log(e));
          }, [pageNumber])
const handleClick =page => {
    setPageNumber(page)
}
    return (
        <div className="speciesPage">
          <div className='speciesPage__container'>
          {species?.map(species =><SpecieCard key={species.name} classification={species.classification}
            
            desgination={species.designation}
            eye={species.eye_colors}
            skin={species.skin_colors}
            lifespan={species.average_lifespan}
            lang={species.language}
            height={species.average_height}
            title={species.name}/>)}
          </div>
          <Pagination itemPerPage={10} totalNumberOfItem={37} click={handleClick} />
        </div>
    )
}

export default Species
