import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/country";
import './countries.css'

const Countries = () => {
   const [countries, setCountries] = useState([]);
   const [visitedCountries, setVisitedCountries] = useState([]);
   console.log(countries);
   useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res=>res.json())
      .then(data=> setCountries(data))
   },[])

   const handleVisitedCountries = country => {
      console.log('add this to your visited country');
      console.log(country);
   }

   return (
      <div>
         <h3>Countries: {countries.length}</h3>
         <div>
            <h5>Visited Countries</h5>
            <ul>
            </ul>
         </div>
         <div className="country-container">
         {
            countries.map(data => <Country 
               handleVisitedCountry = {handleVisitedCountries}
               key={data.cca3} 
               country={data} ></Country>)
         }
         </div>
      </div>
   );
};

export default Countries;