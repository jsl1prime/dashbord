google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['', '', ''],
          ['',  86.22, 31.10],
          ['',  31.21, 86.10],
          ['',  81.25, 51.20],
          ['',  86.21, 41.60],
          ['',  56.51, 86.70],
          ['',  81.45, 21.10],
          ['',  83.24, 85.10],
          ['',  82.13, 58.10],
          ['',  86.59, 62.70],
          ['',  62.21, 86.10],
          ['',  86.22, 31.10],
          ['',  84.21, 86.10],
          ['',  51.25, 51.20],
          ['',  86.21, 41.60],
          ['',  72.51, 56.70],
          ['',  51.45, 21.10],
          ['',  83.24, 85.10],
          ['',  82.13, 58.10],
          ['',  86.59, 62.70],
          ['',  62.21, 58.10],
          ['',  86.22, 31.10],
          ['',  84.21, 86.10],
          ['',  56.25, 51.20],
          ['',  86.21, 41.60],
          ['',  72.51, 56.70],
          ['',  81.45, 21.10],
          ['',  58.24, 85.10],
          ['',  82.13, 58.10],
          ['',  86.59, 62.70],
          ['',  84.21, 58.10]
        ]);
        var options = {
		legend: 'none',
		'backgroundColor': 'transparent',
		  
          hAxis: {
		  			baselineColor: '#1e252b',
          			gridlineColor: '#1e252b',
		  		  },
          vAxis: {	
		  			baselineColor: '#1e252b',
          			gridlineColor: '#1e252b',

					ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
		  },
			chartArea: {
				left: 0,
				top: 0,
				width: 263,
				height: 82
			},
		  colors: ['#fb4b87', '#36b2ff'],
		  series: {
				0: { lineWidth: 1, areaOpacity: 0.3},
				1: { lineWidth: 1,  areaOpacity: 0.2}
			}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('dsb_graph'));
        chart.draw(data, options);
      }