import React from 'react';
import {Link} from 'react-router-dom';

const CarListItem = ({carBrand, carSeats, airConditioning, gearBox, location, pricePerDay, rating}) => (
    <div>
        <h3>{carBrand}</h3>
        <p>Seats: {carSeats} | Air conditioning: {airConditioning}</p>
        <p>Gearbox: {gearBox}</p>
        <p>Location: {location}</p>
        <p>Rating: {rating}</p>
        <button>Book Now!</button>
        <br/> 
    </div>
);

export default CarListItem;