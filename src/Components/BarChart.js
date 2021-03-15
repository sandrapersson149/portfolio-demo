import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components';
import axios from 'axios';



// http:api.weatherstack.com/current?access_key=414090984f33e47ed345de49d7ce3314&newyork





const BarChart = () => {
    // const api = 'http://api.weatherstack.com/current?access_key=414090984f33e47ed345de49d7ce3314&query=Stockholm';
    const [chartData, setChartData] = useState({});
    const [num, setNum] = useState([]);

    const chart = () => {
        let tempNum = [];

        axios
            .get('https://api.openweathermap.org/data/2.5/onecall?lat=59.334591&lon=18.063240&appid=1a2363f2dc8b80e9b8b8781b3756e20e&units=metric')
            .then(res => {
                console.log(res);
                //for(let i =0; i <= 6; i++){
                //for (const dataObj of res.data.data) {

                for (let i = 0; i <= 6; i++) {
                    tempNum.push(parseInt(res.data.daily[i].temp.day));
                    console.log(tempNum)
                }

                setChartData({
                    labels: ['Mon', 'Thus', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Temp',
                        data: tempNum,
                        //Om man vill ha samma färg på alla så skriver man bara in en färg som appliceras på alla
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)'
                        ],
                        borderWidth: 1,
                    }
                    ]
                });

            })
            .catch(err => {
                console.log(err)
            })

    };
    useEffect(() => {
        chart();
    }, []);
    return (
        <div className="App">
            <h1>Dankmemes</h1>
            <div>
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        title: { text: "Weekly temp", display: true },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        </div>
    );
};

// return (
//     <WrappingDiv>
//         <Bar
//             data={{
//                 //det som visas under diagrammet
//                 labels: ['React', 'JavaScript', 'HTML', 'CSS', 'Figma', 'Scrum'],
//                 datasets: [{
//                     label: 'How good I think I am',
//                     data: [9, 11, 7, 5, 7, 2],
//                     //Om man vill ha samma färg på alla så skriver man bara in en färg som appliceras på alla
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(255, 206, 86, 0.2)',
//                         'rgba(75, 192, 192, 0.2)',
//                         'rgba(153, 102, 255, 0.2)',
//                         'rgba(255, 159, 64, 0.2)'
//                     ],
//                     borderColor: [
//                         'rgba(255, 99, 132, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)'
//                     ],
//                     borderWidth: 1,
//                 },
//                 {
//                     label: 'How good other people think I am',
//                     data: [2, 7, 4, 8, 10, 7],
//                     backgroundColor: ['rgba(255, 99, 132, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)'],
//                     borderColor: [
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(255, 206, 86, 0.2)',
//                         'rgba(75, 192, 192, 0.2)',
//                         'rgba(153, 102, 255, 0.2)',
//                         'rgba(255, 159, 64, 0.2)'
//                     ]
//                 }]
//             }}
//             height={400}
//             width={600}
//             options={{
//                 maintainAspectRatio: false,//So you cant scroll
//                 scales: {
//                     yAxes: [{
//                         ticks: {
//                             beginAtZero: true,
//                         }
//                     }]
//                 },
//                 legend: {
//                     labels: {
//                         fontSize: 20
//                     }
//                 }
//             }}
//         />
//     </WrappingDiv>
// )

export default BarChart;

