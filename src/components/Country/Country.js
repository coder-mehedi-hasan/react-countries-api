import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = (country) => {
    return (
        <div className='country'>
            <h3>Name : {country.commonName}</h3>
            <p>official name : {country.officialName}</p>
            <p>region : {country.region}</p>
            <p>area : {country.area}</p>
            <p>code : {country.code}</p>
            <div className="button">

            <Link to={`/country_details/${country.code}`}>Details</Link>
            </div>
        </div>
    );
};

export default Country;