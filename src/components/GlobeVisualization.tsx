import React from 'react';
import './GlobeVisualization.css';

interface GlobeVisualizationProps {
    mileage: number;
}

const EARTH_CIRCUMFERENCE = 40075; // km
const DISTANCE_TO_MOON = 384400;   // km

const GlobeVisualization: React.FC<GlobeVisualizationProps> = ({ mileage }) => {
    const lapsAroundEarth = mileage / EARTH_CIRCUMFERENCE;
    const remainingToLap = EARTH_CIRCUMFERENCE - (mileage % EARTH_CIRCUMFERENCE);
    const remainingToMoon = DISTANCE_TO_MOON - mileage;
    const moonProgress = Math.min((mileage / DISTANCE_TO_MOON) * 100, 100);

    return (
        <div className="globe-visualization">
            <div className="earth">
                <img src="/kms/images/earth.svg" alt="Terra" className="earth-image" />
            </div>
            <div className="moon">
                <img src="/kms/images/moon.svg" alt="Lua" className="moon-image" />
            </div>
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${moonProgress}%` }}></div>
            </div>
            <div className="info">
                <p>Voltas completas na Terra: {Math.floor(lapsAroundEarth)}</p>
                <p>Km para completar a próxima volta: {remainingToLap.toFixed(2)}</p>
                <p>
                    {mileage >= DISTANCE_TO_MOON
                        ? 'Já chegou na Lua!'
                        : `Faltam ${remainingToMoon.toFixed(2)} km para a Lua`}
                </p>
            </div>
        </div>
    );
};

export default GlobeVisualization;