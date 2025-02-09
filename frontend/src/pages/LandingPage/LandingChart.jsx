import Chart from 'https://esm.sh/chart.js/auto';
import { onCleanup, onMount } from "solid-js";


export default function LandingChart() {
    let canvasElem;
    let tension = 0.25;
    onMount(() => {
        const chart = new Chart(canvasElem, {
            type: 'line',
            data: {
                labels: ["","","","",""],
                datasets: [
                    {
                        label: 'Account 1',
                        data: [0],
                        tension: tension
                    },
                    {
                        label: 'Account 2',
                        data: [0],
                        tension: tension
                    },
                    {
                        label: 'Account 3',
                        data: [0],
                        tension: tension
                    },
                    
                ]           
            },
            options: {
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
        chart.data.datasets.forEach((dataset) => { 
            for(let i = 0; i < 4; i++){

                let lastIndex = dataset.data.length-1;
                // Random modified for upwards trend
                let newNum = dataset.data[lastIndex] + (Math.floor(Math.random() * 71)-25);

                if(newNum > 100) {
                    newNum = 100;
                }
                if(newNum < 0) {
                    newNum = 0;
                }
                dataset.data.push(newNum);
            }
        });
        chart.update();

        // Adding new values
        function newDataPoints() {      
            chart.data.datasets.forEach((dataset) => { 
                let lastIndex = dataset.data.length-1;
                let newNum = dataset.data[lastIndex] + (Math.floor(Math.random() * 51)-25);
                dataset.data = dataset.data.slice(1);

                if(newNum > 100) {
                    newNum = 100;
                }
                if(newNum < 0) {
                    newNum = 0;
                }
                dataset.data.push(newNum);
            });
            chart.update();
        }

        
        // Add new data points every 1.75 seconds
        setInterval(newDataPoints, 2000);
    });

    return (
        <canvas 
            ref={canvasElem} 
            width={600} 
            height={400} 
        />
    );
}