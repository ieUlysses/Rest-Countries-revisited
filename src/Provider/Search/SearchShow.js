import React from "react"
import { Form, FloatingLabel } from "react-bootstrap"
import axios from "axios"

import { useState, useEffect } from "react"
import Card from "../../Componants/Card/Card"


export default function () {

    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")

    const Url = "https://restcountries.eu/rest/v2/all"

    useEffect(() => {

        const fetchData = async () => {
            const country = await axios.get(Url)
            console.log(country.data)
            setCountries(country.data)
        }

        fetchData();

    }, [Url])


    const handleType = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    const matchCountry = countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <FloatingLabel controlId="floatingTextarea" label="Search for a country" className="mb-3">
                <Form.Control as="textarea" onChange={handleType} />
            </FloatingLabel>
            {
                search ? (
                    matchCountry.map((country) => (
                        <Card
                            key={country.nativeName}
                            nativeName={country.nativeName}
                            region={country.region}
                            name={country.name}
                            flag={country.flag}
                            callingCodes={country.callingCodes} />
                    )
                    )) :
                    (
                        <h1>Damn! Start typing aready...</h1>
                    )
            }
        </>
    )
}