import Chart from 'https://esm.sh/chart.js/auto';
import { onCleanup, onMount } from "solid-js";


export default function ExampleChart() {
    let canvasElem;
    let tension = 0.25;
    onMount(() => {
        const chart = new Chart(canvasElem, {
            type: 'bar',
            data: {
                labels: ['Income', 'Expenses', 'Net Worth'],
                datasets: [{
                    label: 'Financial Overview',
                    data: [5000, 1000, 4000],
                    backgroundColor: ['#66C2A5', '#ff635e', '#FFD92F']
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,  // Enable the y-axis title
                            text: '$ $ $' // Set the label text
                        }
                    }
                }
            }
        });
    });

    return (
        <canvas 
            ref={canvasElem} 
            width={800} 
            height={400} 
        />
    );
}