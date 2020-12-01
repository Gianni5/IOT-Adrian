/// Colour Scheme



var barChartCanvas2 = document.getElementById("pressure-Chart");

var pieData = {
    labels: ['Pressure'],

    datasets: [{
        labels: 'Pressure',
        data: [76,],
        borderWidth: 1,
        borderColor:['rgba(58, 134, 255, 1)'],
        backgroundColor: [
            'rgba(255, 190, 11, 1)',

        ],
    }],

}

var pieOptions = {}

var myPieChart = new Chart(barChartCanvas2, {
    type: 'bar',
    data: pieData,
    options: pieOptions,
})
