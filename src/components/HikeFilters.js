import React, { useState } from 'react';

const HikeFilters = (props) => {
    const [petFriendly, setPetFriendly] = useState(false);
    const [kidFriendly, setKidFriendly] = useState(false);
    const [requiresPass, setRequiresPass] = useState(false);
    const [maxDistance, setMaxDistance] = useState(10.0);

    const handlePetFriendly = () => {
        setPetFriendly(!petFriendly);
    }

    const handleKidFriendly = () => {
        setKidFriendly(!kidFriendly);
    }

    const handleRequiresPass = () => {
        setRequiresPass(!requiresPass);
    }

    const handleMaxDistance = (event) => {
        setMaxDistance(event.target.value);
    }

    const handleSubmit = () => {
        props.applyFilters(petFriendly, maxDistance);
    }

    return (
        <div>
            <h2>Filters</h2>
            <div>
                <input type='radio' id='pet-friendly' checked={petFriendly} onClick={handlePetFriendly}></input>
                <label for="pet-friendly">Pet Friendly</label>

                <input type='radio' id='kid-friendly' checked={kidFriendly} onClick={handleKidFriendly}></input>
                <label for="kid-friendly">Kid Friendly</label>

                <input type='radio' id='requires-pass' checked={requiresPass} onClick={handleRequiresPass}></input>
                <label for="requires-pass">No Required Pass</label>
            </div>
            <div>
                <label for="max-distance">Max Distance: {maxDistance} </label>
                <input type='range' min="0" max="20" value={maxDistance} id='max-distance' onChange={handleMaxDistance}></input>
            </div>
            <div className="col-auto">
                <button id="submitButton" type="submit" className="btn btn-warning" onClick={handleSubmit}>Apply Filter</button>
            </div>

        </div>
    )
}

export default HikeFilters;