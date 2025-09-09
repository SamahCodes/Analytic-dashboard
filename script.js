   // Line Chart
    new Chart(document.getElementById('lineChart').getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
        datasets: [{
          label: 'Visitors',
          data: [1200, 1900, 3000, 2500, 3200, 4000, 4500],
          borderColor: '#3B82F6', // blue-500
          backgroundColor: 'rgba(59,130,246,0.2)',
          borderWidth: 2,
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: '#ddd' } } },
        scales: {
          x: { ticks: { color: '#aaa' }, grid: { color: '#444' } },
          y: { ticks: { color: '#aaa' }, grid: { color: '#444' }, beginAtZero: true }
        }
      }
    });

    // Doughnut Chart
    new Chart(document.getElementById('pieChart').getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Desktop', 'Tablet', 'Mobile'],
        datasets: [{
          data: [55, 25, 20],
          backgroundColor: ['#3B82F6', '#2563EB', '#60A5FA'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        cutout: '65%',
        plugins: { legend: { labels: { color: '#ddd' } } }
      }
    });