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
            <h1>Car Mileage Visualizer</h1>
            <MileageForm onSubmit={handleMileageSubmit} />
            <Infographic mileage={mileage} />
            <GlobeVisualization mileage={mileage} />
            <MoonDistanceVisualization mileage={mileage} />
        </div>
    );
};

export default App;