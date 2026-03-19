function toggleMenu() {
  let sidebar = document.getElementById("sidebar");
  sidebar.style.right = sidebar.style.right === "0px" ? "-100%" : "0";
}

new Chart(document.getElementById("chart"), {
  type: "line",
  data: {
    labels: ["00","04","08","12","16","20"],
    datasets: [{
      data: [35,30,50,55,42,38],
      borderColor: "#22c55e",
      tension: 0.4,
      fill: true
    }]
  }
});
