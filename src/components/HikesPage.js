import React, { useState } from 'react';
import HikeCard from './HikeCard';
import HikeFilters from './HikeFilters';

const HikesPage = ({ hikes }) => {
    const [petFriendlyFilter, setPetFriendlyFilter] = useState(false);
    const [kidFriendly, setKidFriendlyFilter] = useState(false);
    const [requiresPass, setRequirePassFilter] = useState(false);
    const [maxDistance, setMaxDistanceFilter] = useState(10.0);

    const applyFilters = (petFriendly, maxDistanceVal) => {
        setPetFriendlyFilter(petFriendly);
        setKidFriendlyFilter(kidFriendly);
        setRequirePassFilter(requiresPass);
        setMaxDistanceFilter(maxDistanceVal);
    }

    const filteredHikes = hikes.filter((hike) => {
        if (petFriendlyFilter && !hike.animalFriendly) {
            return false;
        }

        if (kidFriendly && !hike.kidFriendly) {
            return false;
        }
        
        if(requiresPass && !hike.requiresPass) {
            return false;
        }

        if (hike.distance > maxDistance) {
            return false;
        }
        
        return true;
    })

    return (
        <div>
            <HikeFilters applyFilters={applyFilters} />
            <div className="card-container">
                {filteredHikes.map((hike) => (
                    <HikeCard hike={hike} />
                ))}
            </div>
        </div>
    )
}

export default HikesPage;