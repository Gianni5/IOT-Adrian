



var barChartCanvas2 = document.getElementById("temperature-Chart");

let tempData = {
    labels: ['temperature'],

    datasets: [{
        label: 'current',
        data: [36,],
        borderWidth: 1,
        borderColor:['rgba(251, 86, 7, 0.5)'],
        backgroundColor: [
            'rgba(251, 86, 7, 1)',

        ],
    }],

}

var tempOptions = {}

var myBarChart = new Chart(barChartCanvas2, {
    type: 'bar',
    data: tempData,
    options: tempOptions,
})

function temperature() {
    let url = "http://127.0.0.1:5555/api/temperature"
    let method = "GET"
    let typeOfResponse = "json"
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.responseType = typeOfResponse
    xhr.send()
    xhr.onload = function () {
        let responseObj = xhr.response
        for (let responseNumber in responseObj) {
            let myTemperature = responseObj[responseNumber].temperature

            myBarChart.data.datasets[0].data = [myTemperature]
            myBarChart.update()
        }
    }
}

setInterval(temperature,5000)