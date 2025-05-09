// Line chart for workout activities
const ctx = document.getElementById('activityChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Exercises',
        data: [8, 6, 7, 9, 8, 7, 6],
        borderColor: 'orange',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Equipment Usage',
        data: [3, 4, 5, 6, 6, 7, 8],
        borderColor: 'white',
        borderWidth: 2,
        fill: false,
      }
    ]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Pie chart for attendance
const pie = document.getElementById('pieChart').getContext('2d');
new Chart(pie, {
  type: 'pie',
  data: {
    labels: ['Present', 'Absent', 'Total remaining days'],
    datasets: [{
      data: [20, 5, 6],
      backgroundColor: ['orange', 'gray', 'white'],
    }]
  }
});
