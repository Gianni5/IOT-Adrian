/// Colour Scheme
// mango = rgba(255, 190, 11, 1);
// mango50 = rgba(255, 190, 11, 0.5);
// orangePantone= rgba(251, 86, 7, 1);
// winterSky= rgba(255, 0, 110, 1);
// blueViolet= rgba(131, 56, 236, 1);
// azure= rgba(58, 134, 255, 1);


var pieChartCanvas2 = document.getElementById("CPU-Chart");

var pieData = {
    labels: ['CPU User', 'Idle'],

    datasets: [{
        data: [36, 64],
        borderWidth: 2,
        boarderAlign: 'inner',
        backgroundColor: [
            'rgba(255, 190, 11, 0.5)',
            'rgba(251, 86, 7, 1)',
        ],
    }],

}

var pieOptions= {}

var myPieChart= new Chart(pieChartCanvas2, {
    type: 'pie',
    data: pieData,
    options: pieOptions,
})
