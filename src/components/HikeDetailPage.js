import React from 'react';
import { useParams } from 'react-router-dom';
import hikes from "../data/hikes.json";
import Comments from './Comments';

const HikeDetailPage = () => {
    const { name } = useParams();
    const hike = hikes.find(h => h.name === name);

    if (!hike) {
        return <h2>Hike not found</h2>;
    }

    return (
        <div className="container">
            <header className="jumbotron">
                <h1>Husky Hikes - {hike.name}</h1>
                <h2>📍{hike.location}</h2>

            </header>

            <main>
                <div className="hike-info">
                    <img src={`/img/${hike.imageName}`} alt={hike.imageName}/>
                    <h2>About the hike:</h2>
                    <p>Scenery: {hike.scenery.join(', ')}</p><br />
                    <p>
                        Kid Friendly: {hike.kidFriendly ? "Yes" : "No"},
                        Animal Friendly: {hike.animalFriendly ? "Yes" : "No"},
                        Requires Pass? {hike.requiresPass ? "Yes" : "No"}
                    </p><br />
                    <p>
                        Distance: {hike.distance} miles,
                        Time in Minutes: {hike.timeInMinutes},
                        Elevation: {hike.elevation} ft
                    </p>
                </div>
                <Comments />
            </main>
        </div>
    );
};

export default HikeDetailPage;