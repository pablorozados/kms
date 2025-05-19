import React from 'react';
import { calculateLapsAroundEarth, calculateDistanceToMoon } from '../utils/calculations';

interface InfographicProps {
    mileage: number;
}

const Infographic: React.FC<InfographicProps> = ({ mileage }) => {
    const laps = calculateLapsAroundEarth(mileage);
    const distanceToMoon = calculateDistanceToMoon(mileage);
    const remainingLaps = laps < 1 ? 1 - laps : 0;

    return (
        <div className="infographic">
            <h2>Infographic</h2>
            <div className="mileage-info">
                <p>Total Mileage: {mileage} km</p>
                <p>Laps Around Earth: {laps.toFixed(2)}</p>
                {remainingLaps > 0 && <p>Remaining Laps to Complete One: {remainingLaps.toFixed(2)}</p>}
                <p>Distance to Moon: {distanceToMoon.toFixed(2)} km</p>
            </div>
            <div className="visualization">
                <img src="/kms/images/earth.svg" alt="Earth" className="earth-image" />
                <img src="/kms/images/moon.svg" alt="Moon" className="moon-image" />
                {/* Visualization logic will go here */}
            </div>
        </div>
    );
};

export default Infographic;