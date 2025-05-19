import React, { useState } from 'react';
import MileageForm from './components/MileageForm';
import Infographic from './components/Infographic';
import GlobeVisualization from './components/GlobeVisualization';
import MoonDistanceVisualization from './components/MoonDistanceVisualization';
import './styles/main.css';

const App = () => {
    const [mileage, setMileage] = useState(0);

    const handleMileageSubmit = (mileageValue: number) => {
        setMileage(mileageValue);
    };

    return (
        <div className="app-container">
            <h1>Qual a distância que o seu carro já percorreu?</h1>
            <MileageForm onSubmit={handleMileageSubmit} />
            {mileage > 0 && (
                <div style={{ margin: '20px 0', textAlign: 'center' }}>
                    <p><strong>Quilometragem total:</strong> {mileage.toLocaleString()} km</p>
                    <p><strong>Voltas ao redor da Terra:</strong> {(mileage / 40075).toFixed(2)}</p>
                    <p><strong>Distância até a Lua:</strong> {(384400 - mileage).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} km</p>
                </div>
            )}
            <GlobeVisualization mileage={mileage} />
            <MoonDistanceVisualization mileage={mileage} />
        </div>
    );
};

export default App;