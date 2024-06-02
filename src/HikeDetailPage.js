import React from 'react';
import { useParams } from 'react-router-dom';
import hikes from "./data/hikes.json";

const HikeDetailPage = () => {
    const { name } = useParams();
    console.log(`Fetching details for hike ID: ${name}`);
    const hike = hikes.find(h => h.name === name);

    if (!hike) {
        return <h2>Hike not found</h2>;
    }

    return (
        <div className="hike-detail">
            <img src={`/img${hike.imageName}`} alt={hike.name} />
            <h2>{hike.name}</h2>
            <p>📍{hike.location}</p>
            <p>{hike.scenery.join(", ")}</p>
        </div>
    );
};

export default HikeDetailPage;