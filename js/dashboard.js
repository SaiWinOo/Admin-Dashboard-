$(".counter-up").counterUp({
    dalay:10,
    time:1000
});

let dataArr = ['jul 21','jul 20', 'jul 19', 'jul 18', 'jul 17', 'jul 16', 'jul 15','jul 14', 'jul 13', 'jul 12','jul 11'];
let orderCountArr = ['4','7','5','8','6','8','5','6','2','4','9'];
let viewerCountArr = ['34','32','21','32','43','12','22','42','14','31','42'];

const ctx = document.getElementById('ov').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dataArr,
        datasets: [{
            label: 'Order Count',
            data: orderCountArr ,
            backgroundColor: [
                '#007bff30'
            ],
            borderColor: [
                '#007bff'
            ],
            borderWidth: 1,
            lineTesnion: 0
        },
        {
            label: 'Viewer Count',
            data: viewerCountArr ,
            backgroundColor: [
                '#28a74530'
            ],
            borderColor: [
                '#28a745'
            ],
            borderWidth: 1,
            lineTesnion: 0
        }
]
    },

    options: {
        scales: {
            xAxes: [{
                display: false, 
                lineTesnion: 0,
                gridLines: {
                    color: "rgba(0,0,0,0)",
                    
                }
            }],
            yAxes: [{
                display: false,
                lineTesnion: 0, 
                gridLines: {
                
                }   
            }]
        },
        legend: {
            display: true,
          position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle: true
            }
        }
    }
    
});

let orderFromPlace = [5,2,6,3,6];
let places = ["YGN","MDY","NPY","SHAN","MGW"]

const cta = document.getElementById('op').getContext('2d');
const mychart = new Chart(cta, {
    type: 'doughnut',
    data: {
        labels: places,
        datasets: [{
            label: '# of Votes',
            data: orderFromPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                display: false
            },
            x: {
                display: false
            }
        },
        legend: {
            display: true,
          position: 'bottom',
            labels: {
                fontColor: '#333',
                usePointStyle: true
            }
        }
    }
});