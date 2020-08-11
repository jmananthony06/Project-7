var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      datasets: [
        {
          // label: null,
          lineTension: 0,
          data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
          backgroundColor: [
            "rgba(98, 112, 179, 0.2)",
            "rgba(98, 112, 179, 0.2)",
            "rgba(98, 112, 179, 0.2)",
            "rgba(98, 112, 179, 0.2)",
            "rgba(98, 112, 179, 0.2)",
            "rgba(798, 112, 179, 0.2)",
          ],
          borderColor: [
            "rgba(76, 78, 108, 1)",
            "rgba(76, 78, 108, 1)",
            "rgba(76, 78, 108, 1)",
            "rgba(76, 78, 108, 1)",
            "rgba(76, 78, 108, 1)",
            "rgba(76, 78, 108, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: true,
      responsive: true,
      legend: {display: false},
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              suggestedMin: 0,
              suggestedMax: 2500,
            },
          },
        ],
      },
    },
  });

var ctx = document.getElementById("myBar").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [
        {
          // label: "# of Votes", //undefined but when commented out doesn't disappear, why?
          data: [75, 110, 175, 125, 225, 180, 115],
          backgroundColor: [
            "rgb(98, 112, 179)",
            "rgb(98, 112, 179)",
            "rgb(98, 112, 179)",
            "rgb(98, 112, 179)",
            "rgb(98, 112, 179)",
            "rgb(98, 112, 179)",
            "rgb(98, 112, 179)",
          ],
          borderColor: [
            "rgba(76, 78, 108, 1)",
            "rgba(76, 78, 108, 1)",
            "rgba(76, 78, 108, 1)",
            "rgba(76, 78, 108, 1)",
            "rgba(76, 78, 108, 1)",
            "rgba(76, 78, 108, 1)",
            "rgba(76, 78, 108, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: true,
      responsive: true,
      legend: {display: false},
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  var ctx = document.getElementById("myDoughnut").getContext("2d");
  var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [
          {
            label: ["# of Votes"],
            data: [12, 19, 3],
            backgroundColor: [
              "rgba(102, 192, 136, 1)",
              "rgba(87, 169, 182, 1)",
              "rgba(98, 112, 179, 1)",
            ],
            borderColor: [
              "rgba(102, 192, 136, 1)",
              "rgba(87, 169, 182, 1)",
              "rgba(98, 112, 179, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
          align: "center",
                position: 'right',
                display: true,
                //labels: {boxWidth: 20}
              },
        scales: {
          yAxes: [
            {
              ticks: {display: false},
              gridLines: {display: false}
            },
          ],
          xAxes: [
            {
              ticks: {display: false},
              gridLines: {display: false}
            },
          ],
        },
      },
    });