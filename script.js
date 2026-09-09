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
// Initialize map
const map = L.map("map").setView([17.3850, 78.4867], 12);

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Example flood-risk locations
const locations = [
    {
        name: "Area A",
        risk: "HIGH",
        lat: 17.3850,
        lng: 78.4867
    },
    {
        name: "Area B",
        risk: "MEDIUM",
        lat: 17.4100,
        lng: 78.4500
    },
    {
        name: "Area C",
        risk: "LOW",
        lat: 17.3500,
        lng: 78.5200
    }
];

// Add markers
locations.forEach(location => {
    L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup(`
            <b>${location.name}</b><br>
            Flood Risk: ${location.risk}
        `);
});
function updatePrediction(rainfall) {

    const riskBadge = document.getElementById("riskBadge");
    const rainfallValue = document.getElementById("rainfallValue");
    const predictionMessage = document.getElementById("predictionMessage");

    rainfallValue.textContent = rainfall + " mm";

    if (rainfall >= 50) {

        riskBadge.textContent = "HIGH RISK";
        predictionMessage.textContent =
            "⚠️ High rainfall detected. Flood risk is elevated.";

    } else if (rainfall >= 25) {

        riskBadge.textContent = "MEDIUM RISK";
        predictionMessage.textContent =
            "⚠️ Moderate rainfall detected. Continue monitoring.";

    } else {

        riskBadge.textContent = "LOW RISK";
        predictionMessage.textContent =
            "✅ Current rainfall conditions show low flood risk.";
    }
}

updatePrediction(42);
const ctx = document.getElementById("rainfallChart");

new Chart(ctx, {
    type: "line",

    data: {
        labels: [
            "12 PM",
            "1 PM",
            "2 PM",
            "3 PM",
            "4 PM",
            "5 PM"
        ],

        datasets: [{
            label: "Rainfall (mm)",
            data: [12, 18, 25, 31, 38, 42],
            borderWidth: 3,
            tension: 0.4,
            fill: false
        }]
    },

    options: {
        responsive: true,

        maintainAspectRatio: false,

        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Rainfall (mm)"
                }
            }
        }
    }
});
