
    const ctxLine = document.getElementById('lineChart');
    new Chart(ctxLine, {
      type: 'line',
      data: {
        labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        datasets: [
          {
            label: 'Equipments Usage',
            data: [2, 3, 4, 3, 4, 5, 4],
            borderColor: 'white',
            backgroundColor: 'transparent'
          },
          {
            label: 'Exercise',
            data: [5, 3, 4, 6, 5, 4, 3],
            borderColor: '#f4511e',
            backgroundColor: 'transparent'
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: 'white' }
          },
          x: {
            ticks: { color: 'white' }
          }
        },
        plugins: {
          legend: { labels: { color: 'white' } }
        }
      }
    });

    const pie = document.getElementById('pieChart').getContext('2d');
    new Chart(pie, {
      type: 'pie',
      data: {
        labels: ['Present', 'Absent', 'Total remaining days'],
        datasets: [{
          data: [22, 5, 4],
          backgroundColor: ['orange', 'gray', 'blue']
        }]
      }
    });

    flatpickr("#calendar", {
      inline: true,
      dateFormat: "Y-m-d"
    });
