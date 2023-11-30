// not currently being imported into app due to KingsSolution2

import kings from '../Data/kings.json';
import King from './King';
import { useState } from 'react';

// Comment before each line that's additional for filter


function KingSolution() {

  // addition of filter
const [filter, setFilter] =useState("")


    const kingComponents =[];

    for (const king of kings) {
// addition of if statement to get the filter to work
// Original if statement was (filter.length ===0 || king.nm === filter)
// below filters partial name and is insensitive .startsWith(filter) will include names starting with input/filter
      if (!filter  || king.nm.toLowerCase().includes(filter.toLowerCase()) ){
// to get filter not case sensitive add .toLowerCase() after the name
        kingComponents.push(
          <King key={king.nm + "" + king.yrs}
          name={king.nm} 
          country={king.cty} 
          house={king.hse} 
          years={king.yrs} 
          />
        );}
    }
// addition of function to get the filter to work
    function handleChange(event) {

      setFilter(event.target.value)
    }
    return(
        <div>
{/* addition of input to get the filter to work */}
          <input type = "text" value ={filter} onChange= {handleChange}/>
    
     {kingComponents}
      </div>
  )} 

    
export default KingSolution