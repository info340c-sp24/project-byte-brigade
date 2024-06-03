import React from 'react';
import { useParams } from 'react-router-dom';
import hikes from "../data/hikes.json";
import Comments from './Comments';

const HikeDetailPage = () => {
    const { name } = useParams();
    console.log(`Fetching details for hike ID: ${name}`);
    const hike = hikes.find(h => h.name === name);

    if (!hike) {
        return <h2>Hike not found</h2>;
    }

    return (
        <div className="hike-detail">
            <img src={`/img/${hike.imageName}`} alt={hike.name} />
            <h2>{hike.name}</h2>
            <p>📍{hike.location}</p>
            {hike.scenery && <p>{hike.scenery.join(", ")}</p>}
            <Comments />
        </div>
    );
};

export default HikeDetailPage;