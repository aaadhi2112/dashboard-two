import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './AcademicsAndScoresChart.css';


function AcademicsAndScoresChart() {


    const state = {

        series: [{
            name: "School",
            data: [20, 41, 35, 51, 49, 62, 59, 41, 48],
            color: '#2606FB',
        },
        {
            name: "College",
            data: [5, 21, 45, 41, 59, 42, 49, 31, 30],
            color: '#FF8809',
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            // title: {
            //     text: 'Product Trends by Month',
            //     align: 'left'
            // },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            }
        }
    }



    return (
        <div className='acascoreschart'>
            
                <ReactApexChart options={state.options} series={state.series} type="line" height={290} />
           
        </div>
    )
}

export default AcademicsAndScoresChart