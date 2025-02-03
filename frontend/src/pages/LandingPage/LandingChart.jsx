import Chart from 'https://esm.sh/chart.js/auto';
import { onCleanup, onMount } from "solid-js";


export default function LandingChart() {
    
    /*const chart = new Chart(chart, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Account 1',
                    data: [0, 2]
                },
                {
                    label: 'Account 2',
                    data: [0, 2]
                },
                {
                    label: 'Account 3',
                    data: [0, 2]
                }
            ]
        },
        options: {
            animation: {
                duration: 500,
                easing: 'easeOutElastic'
            },
            scales: { // Disables axes
                y: {
                    min: 0,
                    max: 100,
                    title: {
                        display: true,  // Enable the y-axis title
                        text: 'Balance' // Set the label text
                    }
                }
            }
        }
    });*/
    
    let canvasElem;
    onMount(() => {
        const chart = new Chart(canvasElem, {
            type: 'line',
            data: {
                labels: ["","","","",""],
                datasets: [
                    {
                        label: 'Account 1',
                        data: [0],
                        tension: 0.5
                    },
                    {
                        label: 'Account 2',
                        data: [0],
                        tension: 0.5
                    },
                    {
                        label: 'Account 3',
                        data: [0],
                        tension: 0.5
                    },
                    
                ]           
            },
            options: {
                /*animation: {
                    duration: 500,
                    easing: 'easeOutElastic'
                },*/
                scales: {
                    x: {
                        
                    },
                    y: {
                        min: 0,
                        max: 100,
                        title: {
                            display: true,  // Enable the y-axis title
                            text: 'Balance' // Set the label text
                        }
                    }
                }
            }
        });

        // Initialize first datapoints
        for(let i = 0; i < 4; i++){
            //newDataPoints();
            chart.data.datasets.forEach((dataset) => {
                dataset.data.push(dataset.data[dataset.data.length-1]+(Math.floor(Math.random() * 75)-35)); // Random datapoint for each line
                if(dataset.data[dataset.data.length-1] > 100) {
                    dataset.data[dataset.data.length-1] = 100;
                }
                if(dataset.data[dataset.data.length-1] < 0) {
                    dataset.data[dataset.data.length-1] = 0;
                }
            });
        }
        chart.update();

        
        // Adding new values
        function newDataPoints() {            
            chart.data.datasets.forEach((dataset) => { 
                let lengthOfData = dataset.data.length;
                
                for(let i = 0; i < lengthOfData - 1; i++) {
                    dataset.data[i] = dataset.data[i+1];                    
                }

                dataset.data[lengthOfData-1] = dataset.data[dataset.data.length-1] + (Math.floor(Math.random() * 50)-25);
                
                if(dataset.data[dataset.data.length-1] > 100) {
                    dataset.data[dataset.data.length-1] = 100;
                }
                if(dataset.data[dataset.data.length-1] < 0) {
                    dataset.data[dataset.data.length-1] = 0;
                }
            });
            chart.update(); // Push updates to chart
        }
        
        // Add new data points every 1.75 seconds
        setInterval(newDataPoints, 2000);
    });

    return (
    <canvas 
        ref={canvasElem} 
        width={600} 
        height={400} 
        style="border-radius: 10px;"
    />
    );
}