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
                    <p>Scenery: {hike.scenery}</p><br />
                    <p>Kid Friendly: {hike.kidFriendly}, Animal Friendly: {hike.animalFriendly}, Requires Pass? {hike.requiresPass}</p><br />
                    <p>Distance: {hike.distance}, Time in Minutes: {hike.timeInMinutes}, Elevation: {hike.elevation}</p>
                </div>
                <Comments />
            </main>
        </div>
    );
};

export default HikeDetailPage;