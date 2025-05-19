import React from 'react';

interface MoonDistanceVisualizationProps {
    mileage: number;
}

const EARTH_TO_MOON_KM = 384400;

const MoonDistanceVisualization: React.FC<MoonDistanceVisualizationProps> = ({ mileage }) => {
    // Limita a posição do carro para não passar da Lua
    const progress = Math.min(mileage / EARTH_TO_MOON_KM, 1);

    // Posições dos elementos no SVG
    const width = 500;
    const height = 120;
    const earthX = 60;
    const moonX = width - 60;
    const centerY = height / 2;

    // Posição do carro ao longo da linha
    const carX = earthX + (moonX - earthX) * progress;

    return (
        <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <svg width={width} height={height}>
                {/* Linha entre Terra e Lua */}
                <line
                    x1={earthX + 40}
                    y1={centerY}
                    x2={moonX - 40}
                    y2={centerY}
                    stroke="#888"
                    strokeWidth={6}
                    strokeDasharray="8 8"
                />
                {/* Terra */}
                <image
                    href="/kms/images/earth.svg"
                    x={earthX}
                    y={centerY - 40}
                    width={80}
                    height={80}
                />
                {/* Lua */}
                <image
                    href="/kms/images/moon.svg"
                    x={moonX - 40}
                    y={centerY - 30}
                    width={60}
                    height={60}
                />
                {/* Carrinho */}
                <image
                    href="/kms/images/car.svg"
                    x={carX - 20}
                    y={centerY - 20}
                    width={40}
                    height={40}
                />
            </svg>
            <div style={{ marginTop: 10 }}>
                <strong>
                    {mileage.toLocaleString()} km percorridos ({(progress * 100).toFixed(2)}% do caminho até a Lua)
                </strong>
            </div>
        </div>
    );
};

export default MoonDistanceVisualization;