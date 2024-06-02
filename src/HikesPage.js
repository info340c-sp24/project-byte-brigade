import React from 'react';
import {useNavigate} from 'react-router-dom';
import hikes from "./data/hikes.json"

const HikesPage = () => {
    const navigate = useNavigate();

    const handleCardClick = (hikeName) => {
        console.log(`Navigating to hikeID: ${hikeName}`);
        navigate(`/hike/${encodeURIComponent(hikeName)}`);
    };

    return (
        <div className = "card-container">
            {hikes.map((hike) => (
                <div class="card">
                    <img src={`/img/${hike.imageName}`} alt={hike.name} />
                    <h2>{hike.name}</h2>
                    <p>📍{hike.location}</p>
                    <p> What to expect: {hike.scenery}</p>
                    
                </div>
            ))}
        </div>
    )
}

export default HikesPage;