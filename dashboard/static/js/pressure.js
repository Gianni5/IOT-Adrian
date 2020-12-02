/// Colour Scheme


var barChartCanvas2 = document.getElementById("pressure-Chart");

var presData = {
    labels: ['Pressure'],

    datasets: [{
        label: 'current',
        data: [76,],
        borderWidth: 1,
        borderColor: ['rgba(58, 134, 255, 1)'],
        backgroundColor: [
            'rgba(255, 190, 11, 1)',

        ],
    }],

}

var presOptions = {}

var myPressureChart = new Chart(barChartCanvas2, {
    type: 'bar',
    data: presData,
    options: presOptions,
})

function pressure() {
    let url = "http://127.0.0.1:5555/api/pressure"
    let method = "GET"
    let typeOfResponse = "json"
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.responseType = typeOfResponse
    xhr.send()
    xhr.onload = function () {
        let responseObj = xhr.response
        for (let responseNumber in responseObj) {
            let myPressure = responseObj[responseNumber].pressure

            myPressureChart.data.datasets[0].data = [myPressure]
            myPressureChart.update()
        }
    }
}

setInterval(pressure, 5000)