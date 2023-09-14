import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/country";
import './countries.css'
// import { Linter } from "eslint";

const Countries = () => {
   const [countries, setCountries] = useState([]);
   const [visitedCountries, setVisitedCountries] = useState([]);
   const [visitedFlags, setVisitedFlags] = useState([]);
   console.log(countries);
   useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res=>res.json())
      .then(data=> setCountries(data))
   },[])

   const handleVisitedCountries = country => {
      console.log('add this to your visited country');
      // console.log(country);
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
   }

   const handleVisitedFlags = (flag) => {
      const newFlags = [...visitedFlags, flag];
      setVisitedFlags(newFlags);

   }

   return (
      <div>
         <h3>Countries: {countries.length}</h3>
         {/* Showing visited countries name */}
         <div>
            <h5>Visited Countries: {visitedCountries.length} </h5>
            <ul>
               {
                  visitedCountries.map(visit => <li key={visit.cca3}>{visit.name.common}</li>)
               }
            </ul>
         </div>
         {/* Showing flags */}
         <img src="" alt="" />
         <div className="flag-container">
            {
               visitedFlags.map((flag, idx) => <img key={idx} src={flag}/>)
            }
         </div>
         {/* Showing all countries */}
         <div className="country-container">
         {
            countries.map(data => <Country 
               handleVisitedCountry = {handleVisitedCountries}
               handleVisitedFlags = {handleVisitedFlags}
               key={data.cca3} 
               country={data} ></Country>)
         }
         </div>
      </div>
   );
};

export default Countries;