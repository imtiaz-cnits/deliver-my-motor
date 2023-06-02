var bar_ctx = document.getElementById('myChart').getContext('2d');

var background_1 = bar_ctx.createLinearGradient(0, 0, 0, 200);
background_1.addColorStop(0, '#0776EE');
background_1.addColorStop(1, '#0776ee33');


const ctx = document.getElementById("myChart");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct", "Nov", "Dec"],
          datasets: [
            {
              
              data: [25, 15, 18, 23, 13,23, 28, 32, 37,30,42, 50],
              borderWidth: 1,
              backgroundColor: background_1,
              barThickness: 10,
            },
          ],
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
            },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });



      
const line = document.getElementById("lineChart");

      new Chart(line, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "",
              data: [25, 15, 18, 23, 13,23, 28, 32, 37,30,42, 50],
              borderWidth: 1,
              backgroundColor: '#ff791284',
              fill: true,
            },
          ],
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
            },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });