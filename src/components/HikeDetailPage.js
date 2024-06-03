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
        <div className="container">
            <header>
                <div className="topnav">
                    <a href="/">Home</a>
                    <a href="/quiz">Quiz</a>
                    <a href="/profile">Profile</a>
                    <a className="active" href={`/hike/${name}`}>DEMO PAGE-TEMP</a>
                </div>
                <h1>Husky Hikes - {hike.name}</h1>
                <p>Scenery: {hike.scenery}</p>
            </header>

            <main>
                <div className="hike-info">
                    <img src={`/img/${hike.imageName}`} alt={`Picture of ${hike.name}`} />
                    <h2>About the hike:</h2>
                    <p>{hike.details} || "No details available!" </p>
                </div>
                <Comments />
            </main>

            <footer>
                <p>&copy;HuskyHikes, University of Washington 2024 </p>
            </footer>
        </div>
    );
};

export default HikeDetailPage;