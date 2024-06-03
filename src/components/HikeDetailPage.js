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

            </header>

            <main>
                <div className="hike-info">
                    <img src={`/img/${hike.imageName}`} alt={`this hike is of /img/${hike.imageName}`} />
                    <h2>About the hike:</h2>
                    <p>Scenery: {hike.scenery}</p>
                    <p>{hike.details} || "No details available!" </p>
                </div>
                <Comments />
            </main>
        </div>
    );
};

export default HikeDetailPage;