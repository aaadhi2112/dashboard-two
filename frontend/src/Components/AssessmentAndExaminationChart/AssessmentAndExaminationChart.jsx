import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './AssessmentAndExaminationChart.css';


function AssessmentAndExaminationChart() {


    const state = {

        series: [{
            name: 'School',
            data: [21, 40, 28, 51, 42, 9, 23],
            color: '#2606FB',
          }, {
            name: 'College',
            data: [31, 52, 45, 72, 50, 53, 33],
            color: '#FF8809',
          }],
          options: {
            chart: 
            {
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            xaxis: {
              type: 'category',
              categories: ["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              labels:{
                style:{colors:'#9fa2a2',fontWeight: 900}
              }
            },
            yaxis:{
                type: 'category',
                show:false,
                labels:{
                    style:{colors:'#FF5733'}
                  },
                tickAmount: '2',
                
            },
          //   responsive: [{
          //     breakpoint: 480,
          //     options: {
          //       chart: {
          //         width: 300
          //       },
          //       legend: {
          //         position: 'bottom'
          //       }
          //     }
          //   },
          //   {
          //     breakpoint: 1100,
          //     options: {
          //       chart: {
          //         width: 200
          //       },
          //       legend: {
          //         position: 'bottom'
          //       }
          //     }
          //   }
          // ]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
              
            },
          }
    




  return (
    <div className='assesschart'>
        <ReactApexChart options={state.options} series={state.series} type="area" />
    </div>
  )
}

export default AssessmentAndExaminationChart