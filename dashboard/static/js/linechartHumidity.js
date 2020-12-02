let humLineChartCanvas2 = document.getElementById("humidity-Chart");

let MAX_CPU_POINTS = 25


let lineData = {
    datasets: [
        {
            label: 'Data',
            line: '',
            data: [],
            borderWidth: 2,
            lineTension: 0.2,
            fill: false,
            borderColor: [
                'rgba(58, 134, 255, 1)',
            ],
        },
    ],
}
let lineOptions = {
    legend: {display: false},
    title: {
        display: true,
        text: 'line humidity'
    },
    scales: {
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Time',
            },
        }],
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Percentage',
            },
            ticks: {
                beginAtZero: false,
                suggestedMin: 0,
                suggestedMax: 100,
            },
        }],
    },
}
let humidityChart= new Chart(humLineChartCanvas2 , {
    type: 'line',
    data: lineData,
    options: lineOptions,
})
let counter = 0

function humidityDynamicUpdate() {
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
            let dynamicData = responseObj[responseNumber]
            humidityChart.data.labels.unshift(dynamicData.created_at)
            humidityChart.data.datasets[0].data.unshift(dynamicData.humidity)
            if (counter > MAX_CPU_POINTS) {
                humidityChart.data.labels.pop()
                humidityChart.data.datasets[0].data.pop()
            }
            humidityChart.update()
            counter++
        }
    }
}

humidityDynamicUpdate()
setInterval(humidityDynamicUpdate, 2000);