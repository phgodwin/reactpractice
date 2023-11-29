import kings from '../Data/kings.json';
import King from './King';


function KingSolution() {

    const kingComponents =[];

    for (const king of kings) {

        kingComponents.push(
          <King key={king.nm + "" + king.yrs}
          name={king.nm} 
          country={king.cty} 
          house={king.hse} 
          years={king.yrs} 
          />
        );}
        
    return(
        <div>
    
      {kingComponents}
      </div>
  )} 

    
export default KingSolution