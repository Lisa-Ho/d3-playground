<script>
    export let height; 
    export let xScale; 
    export let margin; 
    console.log(height)
    let xTicks = [0, 25, 50, 75, 100]
</script>
<g> 
    {#each xTicks as tick}
    <text 
        x={xScale(tick)} 
        y={height - margin.bottom}
        dy="6"
        dominant-baseline="hanging"
        >{tick}%
        </text>
        
    {/each}
</g>

<style>
    text {
    font-family: 'Inter', sans-serif;
    font-weight: 400; 
    font-size: 1rem;
    line-height: 1.65em;
    margin-bottom: 1rem;
    color: rgb(22, 22, 22)
    }
</style>