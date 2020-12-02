/// Colour Scheme
// mango = rgba(255, 190, 11, 1);
// mango50 = rgba(255, 190, 11, 0.5);
// orangePantone= rgba(251, 86, 7, 1);
// winterSky= rgba(255, 0, 110, 1);
// blueViolet= rgba(131, 56, 236, 1);
// azure= rgba(58, 134, 255, 1);


let pieCanvasDevice_load = document.getElementById("CPU-Chart");

let pieData = {
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

let pieOptions = {}

let myPieChart = new Chart(pieCanvasDevice_load, {
    type: 'pie',
    data: pieData,
    options: pieOptions,
})

function device_load() {
    let url = "http://127.0.0.1:5555/api/cpu-load"
    let method = "GET"
    let typeOfResponse = "json"
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.responseType = typeOfResponse
    xhr.send()
    xhr.onload = function () {
        let responseObj = xhr.response
        for (let responseNumber in responseObj) {
            let myLoad = responseObj[responseNumber].load
            let idleLoad = 100 - myLoad
            myPieChart.data.datasets[0].data = [myLoad, idleLoad ]
            myPieChart.update()
        }
    }
}

setInterval(device_load,5000)