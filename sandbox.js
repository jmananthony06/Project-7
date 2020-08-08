var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [500, 1000, 1500, 2000, 2500],
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

var ctx = document.getElementById("myBar").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [
        {
          // label: "# of Votes", //undefined but when commented out doesn't disappear, why?
          data: [50, 100, 150, 200, 250],
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
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: true,
        responsive: true,
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