<script>
    import { interpolateWarm, scaleSequential } from 'd3';
    import { layoutPhyllotaxis  } from "./phyllotaxisUtils.js";

    let width = 0;

    const data = layoutPhyllotaxis(Array.from({length:1000}), {radius:0.7, spacing: 1.5});
    const colorGenerator = scaleSequential([0,data.length-1], interpolateWarm)
    let activeCircleIndex = 0;
    setInterval(() => activeCircleIndex++, 700);
</script>

<div 
    bind:clientWidth={width}
>
    <svg viewBox="0 0 100 100"
    >
    <g>
    {#each data as {r, x, y}, i}
        {@const color=colorGenerator(i)}
        <circle 
            cx={x}
            cy={y}
            r={r}   
            fill={color} 
            stroke={color} 
            stroke-width="0.4px"
            fill-opacity={i === activeCircleIndex ? 0.0 : 1.0}
        >
        </circle>
    {/each}
    </g>
    </svg>
</div>

<style>
    div {
        background: radial-gradient(rgb(0,0,0), rgb(52, 52, 52));
    }

    svg {
        width:100%;
        height:100%;
        max-height: 500px;
    }

    g {
        transform: translate(50%, 50%);
    }
</style>