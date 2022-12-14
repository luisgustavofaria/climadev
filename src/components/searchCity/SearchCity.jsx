import { useState, useEffect } from "react";

import InputWithSuggestions from "../form/inputWithSuggestions/InputWithSuggestions";

function SearchCity() {

    const [searchCity, setSearchCity] = useState('')
    const [suggestionCity, setsuggestionCity] = useState([])
    
    const feachCity = async () => {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`)
        const jsonCity = await response.json() 
        changeJsonCity(jsonCity);
    }

    const changeJsonCity = (list) => {
        const formatted = list.map((obj) => {
            return {
                text: `${obj.name}, ${obj.state}, ${obj.country}`,
                onClick: () => console.log(`LAT: ${obj.lat} LON: ${obj.lon}`)
            }
        })
        setsuggestionCity(formatted)
    }
    
    useEffect(() => {
        if (searchCity.length > 3) feachCity()
        
    }, [searchCity])

    return(
        <InputWithSuggestions 
            placeholder='Digite o nome da cidade'
            value={searchCity}
            onChange={(event) => {setSearchCity(event.target.value)}}
            suggestions={suggestionCity}
        />
    )
}

export default SearchCity