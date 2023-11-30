import King from './King';
import { useEffect, useState } from 'react';
import axios from 'axios';





function KingSolution2() {

 
const [filter, setFilter] =useState("")
const [kings, setKings] = useState([])

function getKings(){

    axios.get("https://raw.githubusercontent.com/JHarry444/LBG-React-Demo/main/src/data/kings.json")
    .then((response) => {
        setKings(response.data)})
        .catch((error) => {setKings("There was an error please try again")})
    }

    // runs once upon loading
//    useEffect(() => {getKings()}, [])
// creating a component is required as react cannot render an object (kings)
    const kingComponents =[];

    for (const king of kings) {

      if (!filter  || king.nm.toLowerCase().includes(filter.toLowerCase()) ){
// Only pushing the name and years to the page instead of everything
        kingComponents.push(
          <King key={king.nm + "" + king.yrs}
          name={king.nm} 
                  years={king.yrs} 
          />
        );}
    }

    
    function handleChange(event) {

      setFilter(event.target.value)
    }
    return(

        <div>
            {/* Button below as without it our page would get stuck in a loop. To do without a button see use effect  */}
     <button id="button" onClick={getKings}  > Load Kings</button>

          <input type = "text" value ={filter} onChange= {handleChange}/>
    {kingComponents}
      </div>
  )} 

    
//   EXT:
// Make the button disappear after kings loads
// Make a "<h1> Loading </h1>" appear while the request has been sent but not received.
export default KingSolution2