import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import InputWithSuggestions from "../form/inputWithSuggestions/InputWithSuggestions";

function SearchCity() {

    const [searchCity, setSearchCity] = useState('')
    const [suggestionCity, setsuggestionCity] = useState([])
    const router = useRouter()
    
    const feachCity = async () => {
        const response = await fetch(`/api/openweathermap?url=geo/1.0/direct?q=${searchCity}&limit=5`)
        const jsonCity = await response.json() 
        changeJsonCity(jsonCity);
    }

    const changeJsonCity = (list) => {
        const formatted = list.map((obj) => {
            return {
                text: `${obj.name}, ${obj.state}, ${obj.country}`,
                onClick: () => router.push(`info/${obj.lat}/${obj.lon}`)
            }
        })
        setsuggestionCity(formatted)
    }
    
    useEffect(() => {
        if (searchCity.length > 3) feachCity()
        else setsuggestionCity([])
        
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