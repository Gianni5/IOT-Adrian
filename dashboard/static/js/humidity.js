let humChartCanvas2 = document.getElementById("humidity-Chart");

let humData = {
    labels: ['Humidity'],

    datasets: [{
        label: 'current',
        data: [46,],
        borderWidth: 1,
        borderColor:['rgba(255, 0, 110, 1)'],
        backgroundColor: [
            'rgba(58, 134, 255, 1)',

        ],
    }],

}
let humOptions = {}
let myHumChart = new Chart(humChartCanvas2, {
    type: 'bar',
    data: humData,
    options: humOptions,
})

function humidity() {
    let url = "http://127.0.0.1:5555/api/humidity"
    let method = "GET"
    let typeOfResponse = "json"
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.responseType = typeOfResponse
    xhr.send()
    xhr.onload = function () {
        let responseObj = xhr.response
        for (let responseNumber in responseObj) {
            let myHumidity = responseObj[responseNumber].humidity

            myHumChart.data.datasets[0].data = [myHumidity]
            myHumChart.update()
        }
    }
}

setInterval(humidity,5000)
