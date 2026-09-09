// Flood risk data
const floodData = {
    rainfall: 42,
    risk: "HIGH",
    drainage: 72
};

// Display a welcome message in the browser console
console.log("Smart Urban Flood Management System loaded");

// Check flood risk
function checkFloodRisk() {
    if (floodData.rainfall >= 50) {
        return "HIGH";
    } else if (floodData.rainfall >= 25) {
        return "MEDIUM";
    } else {
        return "LOW";
    }
}

console.log("Current Flood Risk:", checkFloodRisk());
