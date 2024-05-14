import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = ({ hike }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/hike/${hike.id}`);
    };

    return (
        <div classname = "card" onClick={handleClick}>
            <img src={`/img/${hike.imageName}`} alt={hike.name} />
            <h2>{hike.name}</h2>
            <p>📍{hike.location}</p>
        </div>
    );
};

export default Card;