import React from 'react';
import './GlobeVisualization.css';

interface GlobeVisualizationProps {
    mileage: number;
}

const EARTH_CIRCUMFERENCE = 40075; // km

const GlobeVisualization: React.FC<GlobeVisualizationProps> = ({ mileage }) => {
    const laps = mileage / EARTH_CIRCUMFERENCE;
    const fullLaps = Math.floor(laps);
    const partialLap = laps - fullLaps;

    const radius = 60;
    const center = 100;
    const circleGap = 14;

    // Círculos completos
    const circles = [];
    for (let i = 1; i <= fullLaps; i++) {
        circles.push(
            <circle
                key={i}
                cx={center}
                cy={center}
                r={radius + i * circleGap}
                fill="none"
                stroke="#007bff"
                strokeWidth={4}
                opacity={0.7}
            />
        );
    }

    // Arco para a fração de volta
    let partialArc = null;
    if (partialLap > 0) {
        const r = radius + (fullLaps + 1) * circleGap;
        const circumference = 2 * Math.PI * r;
        partialArc = (
            <circle
                cx={center}
                cy={center}
                r={r}
                fill="none"
                stroke="#ff5733"
                strokeWidth={4}
                strokeDasharray={`${circumference * partialLap} ${circumference * (1 - partialLap)}`}
                strokeDashoffset={circumference * 0.25}
                opacity={0.85}
            />
        );
    }

    return (
        <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <svg width={center * 2} height={center * 2}>
                {/* Círculos completos */}
                {circles}
                {/* Arco parcial */}
                {partialArc}
                {/* Terra */}
                <image
                    href="/kms/images/earth.svg"
                    x={center - radius}
                    y={center - radius}
                    width={radius * 2}
                    height={radius * 2}
                />
            </svg>
            <div style={{ marginTop: 10 }}>
                <strong>{laps.toFixed(2)} voltas na Terra</strong>
            </div>
        </div>
    );
};

export default GlobeVisualization;