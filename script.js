function toggleMenu() {
    let sidebar = document.getElementById("sidebar");

    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-100%";
    } else {
        sidebar.style.right = "0";
    }
}

// CHART
const ctx = document.getElementById('chart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["00", "04", "08", "12", "16", "20"],
        datasets: [{
            label: "AQI",
            data: [35, 32, 48, 55, 42, 38],
        }]
    }
});
