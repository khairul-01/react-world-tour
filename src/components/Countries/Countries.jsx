import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/country";

const Countries = () => {
   const [countries, setCountries] = useState([]);
   console.log(countries);
   useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res=>res.json())
      .then(data=> setCountries(data))
   },[])
   return (
      <div>
         <h3>Countries: {countries.length}</h3>
         {
            countries.map(data => <Country country={data} ></Country>)
         }
      </div>
   );
};

export default Countries;