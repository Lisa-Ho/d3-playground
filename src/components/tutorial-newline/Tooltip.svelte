<script>
    export let data;
    export let yScale;
    export let xScale;
    export let topPosition;
    export let leftPosition;

</script>

<div class="tooltip" 
    style="position: absolute; 
    top: {yScale(data.hours) + topPosition}px;
    left: {xScale(data.grade) + leftPosition}px">
<h1>{data.name}</h1>
<p>{data.hours} hours studied</p>
</div>


<style>
    .tooltip {
        padding-left: 4px;
        padding-right: 4px;
        background: white;  
        line-height: 6px; 
        border: 1px solid;   
        pointer-events: none;
        transition: top 200ms ease, left 200ms ease;
    }

    h1 {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 1.1rem;
        margin-bottom: .25rem;
    }

    p {
    font-family: 'Inter', sans-serif;
    font-weight: 300; 
    font-size: 1rem;
    line-height: 1.65em;
    margin-bottom: 1rem;
    color: rgb(22, 22, 22)
    }
</style>