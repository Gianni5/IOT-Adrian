



var barChartCanvas2 = document.getElementById("temperature-Chart");

var pieData = {
    labels: ['temperature'],

    datasets: [{
        labels: 'temperature',
        data: [36,],
        borderWidth: 1,
        borderColor:['rgba(251, 86, 7, 0.5)'],
        backgroundColor: [
            'rgba(251, 86, 7, 1)',

        ],
    }],

}

var pieOptions = {}

var myPieChart = new Chart(barChartCanvas2, {
    type: 'bar',
    data: pieData,
    options: pieOptions,
})

