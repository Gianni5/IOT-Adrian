var barChartCanvas2 = document.getElementById("humidity-Chart");

var pieData = {
    labels: ['Humidity'],

    datasets: [{
        labels: 'Humidity',
        data: [46,],
        borderWidth: 1,
        borderColor:['rgba(255, 0, 110, 1)'],
        backgroundColor: [
            'rgba(58, 134, 255, 1)',

        ],
    }],

}

var pieOptions = {}

var myPieChart = new Chart(barChartCanvas2, {
    type: 'bar',
    data: pieData,
    options: pieOptions,
})


