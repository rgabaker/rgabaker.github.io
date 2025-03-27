const ctx = document.getElementById('chart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                label: 'Sine Curve',
                data: [],
                borderColor: 'blue',
                fill: false
            },
            {
                label: 'Cosine Curve',
                data: [],
                borderColor: 'red',
                fill: false
            }
        ]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
});

function updateChart() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const labels = [];
    const sineData = [];
    const cosineData = [];

    for (let i = 0; i <= 360; i++) {
        labels.push(i);
        sineData.push(Math.sin((i + input1) * Math.PI / 180));
        cosineData.push(Math.cos((i + input2) * Math.PI / 180));
    }

    chart.data.labels = labels;
    chart.data.datasets[0].data = sineData;
    chart.data.datasets[1].data = cosineData;
    chart.update();
}
