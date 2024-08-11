import React from 'react';
import ReactApexChart from 'react-apexcharts';


function AcademicsReportChart() {

    const state = {
          
        series: [70,30],
        options: {
          chart: {
            type: 'donut',
          },
          colors: ['#2606FB', '#FF8809'],
          labels: ['School', 'College'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          },
          {
            breakpoint: 1100,
            options: {
              chart: {
                width: 240
              },
              legend: {
                position: 'bottom',
                
              }
            }
          }]
        }
    }


  return (
    <div>
        <ReactApexChart options={state.options} series={state.series} type="donut" width={300}/>
    </div>
  )
}

export default AcademicsReportChart