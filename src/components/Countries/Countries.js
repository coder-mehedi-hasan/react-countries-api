import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const countries = useLoaderData()
    console.log(countries)

    return (
        <div id='countries'>
            <div className="container">
                <div className="title">
                    <h3>All Countries</h3>
                    <p>Total Countries : {countries.length}</p>
                </div>
                <div className="item">
                    {
                        countries.map(country=> <Country key={country.cca2} commonName={country.name.common} officialName={country.name.official} area={country.area} region={country.region} code={country.cca2}></Country>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;