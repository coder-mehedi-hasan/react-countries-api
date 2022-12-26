import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Country_Details = () => {
    const countryDetails = useLoaderData()
    console.log(countryDetails)
    
    return (
        <div>
            <div className="container">
            <div className="img">
                <img src={countryDetails[0].flags.png} alt="flag" />
            </div>
            <h1>Country Details : {countryDetails[0].name.common}</h1>
            <p>Country Official Name : {countryDetails[0].name.oficial}</p>

            </div>
        </div>
    );
};

export default Country_Details;