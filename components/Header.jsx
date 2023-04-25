'use client'
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {

  const [results,setResults] = useState({})
  const [location, setLocation] = useState('')
 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_API_KEY}`

  const searchLocation =()=>{

    fetch(url)
    .then(res =>res.json())
    .then(data=>setResults(data))
    
   
    setLocation('')
  }

  return (
    <div className=" mb-4 flex justify-between items-center">
      <MapPinIcon className="h-5 w-5 text-black" />
      <input
        className="flex-grow px-4 text-sm font-medium bg-gray-100 mx-4 py-2 rounded-md"
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Enter A Location"
      />

      <MagnifyingGlassIcon 
      onClick={searchLocation}
      className="h-5 w-5 stroke-[4px]" />
    </div>
  );
};

export default Header;
