import React from 'react';
import ReactApexChart from 'react-apexcharts';


function IntitutionChart() {

    const state = {

        series: [{
            data: [30, 50, 70, 40]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    distributed: true, 
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    horizontal: true,
                }
            },
            colors: ['#0000ff', '#ff5900', '#0000ff', '#ff5900' ],
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: [ 'A','B','C','D'
                ],
            }
        },
    }


    return (
        <div style={{width:"400px"}}>
            <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />  
        </div>
    )
}

export default IntitutionChart