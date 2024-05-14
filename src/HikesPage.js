import hikes from "./data/hikes.json"

const HikesPage = () => {
    return (
        <div className = "card-container">
            {hikes.map((hike) => (
                <div class="card">
                    <img src={`/img/${hike.imageName}`} alt={hike.name} />
                    <h2>{hike.name}</h2>
                    <p>📍{hike.location}</p>
                </div>
            ))}
        </div>
    )
}

export { HikesPage };

//this is the suggestions about how to alter this page in order to take the user
//to the desired hike with simply clicking on the card. didn't want to edit your code without asking!

// import React from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
// import hikes from './data/hikes.json'; // Assuming your JSON data is correctly imported

// const HikesPage = () => {
//     const history = useHistory();

//     // Function to handle click event
//     const handleCardClick = (hikeId) => {
//         // Redirect to the individual hike page
//         history.push(`/hike/${hikeId}`); // Assuming '/hike/${hikeId}' is the URL format for individual hike pages
//     };

//     return (
//         <div className="card-container">
//             {hikes.map((hike) => (
//                 // Add onClick event handler to each card
//                 <div className="card" key={hike.id} onClick={() => handleCardClick(hike.id)}> //changing this part
//                     <img src={`/img/${hike.imageName}`} alt={hike.name} />
//                     <h2>{hike.name}</h2>
//                     <p>📍{hike.location}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default HikesPage;