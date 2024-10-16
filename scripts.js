const ctx = document.getElementById('analyticsChart').getContext('2d');
const analyticsChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Sales', 'Distribute', 'Returns'],
        datasets: [{
            data: [55.5, 33.5, 11],
            backgroundColor: ['#A0C4FF', '#BDB2FF', '#FFC6FF']
        }]
    }
});

const growthCtx = document.getElementById('growthChart').getContext('2d');
const growthChart = new Chart(growthCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: '2021',
                data: [25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000],
                backgroundColor: '#000000',
            },
            {
                label: '2022',
                data: [27000, 32000, 37000, 42000, 48000, 53000, 58000, 62000],
                backgroundColor: '#A0C4FF',
            }
        ]
    }
});
