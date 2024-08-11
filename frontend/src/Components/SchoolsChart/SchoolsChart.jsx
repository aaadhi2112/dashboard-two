import React from 'react';
import ReactApexChart from 'react-apexcharts';


function SchoolsChart() {



    const state = {
          
        series: [{
          name: 'A',
          data: [90, 190, 80, 110, 120],
          color: '#2606FB'
        }, {
          name: 'B',
          data: [76, 155, 101, 98, 27],
          color: '#FF8809'
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
                borderRadius: 3,
                columnWidth: 10,
                borderRadiusApplication: 'end', // 'around', 'end'
                borderRadiusWhenStacked: 'last', // 'all', 'last'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['01', '02', '03', '04', '05'],
          },
          yaxis: {
            type: 'category',
                show:true,
                labels:{
                    style:{colors:'#FF5733'}
                  },
                tickAmount: '2',
          },
          fill: {
            opacity: 1
          },
        },
      
      
      };
    




  return (
    <div>
        <ReactApexChart options={state.options} series={state.series} type="bar" width={300} height={350}/>
    </div>
  )
}

export default SchoolsChart