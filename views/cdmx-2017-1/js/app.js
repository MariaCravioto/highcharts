Highcharts.chart('container', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'SPRINT 1'
  },
  tooltip: {/*cuadro de dialogo*/
      pointFormat: '{series.name}:{point.y} <b>{point.percentage:.1f}%</b>'
      /*mostrar numeros y porcentajes*/
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {/*datos que aparecen a los lados*/
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
          }
      }
  },
  series: [{
      name: 'SPRINT 1',
      colorByPoint: true,
      data: [{
          name: 'TECH',
          y: 1213,
      }, {
          name: 'HSE',
          y: 854,
          sliced: true,
          selected: true
      }]
  }]
});
