<script>
    import {scaleLinear} from 'd3';
    import Circle from "./Circle.svelte";
    import Canvas from "./Canvas.svelte"

    let data = Array.from({length: 500}).map(() => {
        return {
            a: Math.random(),  
            b: Math.random(),  
            r: Math.random(),  
            fill: `rgb(${Math.random()* 255},${Math.random()* 255}, 255)`
        }
        });

    setInterval(() => {
        data = Array.from({length: 500}).map(() => {
        return {
            a: Math.random(),  
            b: Math.random(),  
            r: Math.random(),  
            fill: `rgb(${Math.random()* 255},${Math.random()* 255}, 255)`
        }
        });
        }, 2000);

    let width = 768; 
    $: height = width/1.75; 
    
    $: xScale = scaleLinear()
        .domain([0,1])
        .range([0, width]); 

    $: yScale = scaleLinear()
        .domain([0, 1])
        .range([height, 0])

    $: rScale = scaleLinear()
        .domain([0, 1])
        .range([2, width/60])

    </script>
    
    <div bind:clientWidth={width}
        >
        <svg width={width} height={height}>
            {#each data as {a, b, r, fill}}
                <Circle
                    x={xScale(a)}
                    y={yScale(b)}
                    r={rScale(r)}
                    fill={fill}
                />
            {/each}
        </svg>
    </div>
    
<style>
    
    svg {
        background: #eaeaea
     }

</style>