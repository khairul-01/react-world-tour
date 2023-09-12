import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
   const {name, flags, area, population, cca3} = country;
   const [visited, setVisited] = useState(false);
   const handleVisit = () => {
      if(visited){
         setVisited(false);
      }
      else{
         setVisited(true);
      }
   }
   console.log(country);
   // console.log(handleVisitedCountry);
   return (
      <div className={`country ${visited && 'visited' } `}>
         <h3 style={{color: visited ? 'red' : 'black'}}>Name: {name?.common}</h3>
         <img src= {flags.png} alt="" />
         <p>Populaion: {population}</p>
         <p>Area: {area} </p>
         <p><small>Code: {cca3}</small></p>
         <button onClick={() => {handleVisitedCountry(country)}}>Mark Visited</button> <br />
         <button onClick={handleVisit}>{visited ? 'Visited' : 'Going'}</button>
         {
            visited ? "I have visited this country." : 'I want to visit this country.'
         }
      </div>
   );
};

export default Country;