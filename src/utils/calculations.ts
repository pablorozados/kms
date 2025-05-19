// Circunferência da Terra em km
const EARTH_CIRCUMFERENCE_KM = 40075;
// Distância média da Terra à Lua em km
const EARTH_TO_MOON_KM = 384400;

export function calculateLapsAroundEarth(mileage: number): number {
    return mileage / EARTH_CIRCUMFERENCE_KM;
}

export function calculateDistanceToMoon(mileage: number): number {
    // Retorna quanto falta para chegar na Lua (se já passou, retorna 0)
    return Math.max(EARTH_TO_MOON_KM - mileage, 0);
}