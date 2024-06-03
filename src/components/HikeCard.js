import React from 'react';
import { useNavigate } from 'react-router-dom';

const HikeCard = ({hike}) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        console.log(`Navigating to hikeID: ${hike.name}`);
        navigate(`/hike/${encodeURIComponent(hike.name)}`);
    };
    
    return (
        <div
            key={hike.name}
            className="card"
            onClick={handleCardClick}
            style={{ cursor: 'pointer' }}>

            <img src={`/img/${hike.imageName}`} alt={hike.name} />
            <h2>{hike.name}</h2>
            <p>📍{hike.location}</p>
            <p> What to expect: {hike.scenery}</p>

        </div>
    )
}

export default HikeCard;