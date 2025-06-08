<script>
    import { scaleLinear, Delaunay } from 'd3';

    const data = Array.from({length: 80}).map(() => {
        return {
            a: Math.random(),
            b: Math.random()
        };
    });

    const pad = 0;
    let width; 
    $: height = width/1.5; 
    let voronoi;

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const layerX = event.clientX - rect.left;
        const layerY = event.clientY - rect.top;
        /*const { layerX, layerY } = event;*/
        renderedData = [
            {
                x: layerX,
                y: layerY
            },
            ...renderedData.slice(1)
        ];
    }
    
    $: xScale = scaleLinear()
        .domain([0,1])
        .range([pad, width-pad]); 

    $: yScale = scaleLinear()
        .domain([0, 1])
        .range([height-pad, pad])
    
    $: renderedData = data.map(d => {
        return {
            x: xScale(d.a),
            y: yScale(d.b)
        };
    });

    $: if (width && height) {
        const delaunay = Delaunay.from(renderedData, d => d.x, d => d.y);
        voronoi = delaunay.voronoi([pad, pad, width-pad, height-pad]);
    }
</script>

<div 
    bind:clientWidth={width}
    role="application"
    on:mousemove={handleMouseMove}
>
    <svg 
    width={width} 
    height={height}
    >
    {#if voronoi}
    {#each renderedData as d, i}
        <path
         d={voronoi.renderCell(i)}
         fill={i === 0 ? 'aqua' : 'none'}
         stroke="midnightblue"
         />
         <circle
         cx={d.x}
         cy={d.y}
         r={i === 0 ? 6 : 3}
         fill="mediumblue"
         stroke="none"
         />
    {/each}
    {/if}
    </svg>

</div>

<style>

</style>