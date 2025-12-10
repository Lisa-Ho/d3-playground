<script>
    import CatPlay from "./CatPlay.svelte";
    import CatStand from "./CatStand.svelte";
    import CatSit from "./CatSit.svelte";
    import CatSleep from "./CatSleep.svelte";
    import cats from "./cats_test.json";
    import * as d3 from "d3";

    const colr_dict = {
        summer: "#BED567",
        winter: "#53B8CC",
    };

    let width = 400;
    let height = 400; 

    const margin = {top: 20, right: 50, 
        left: 50, bottom:20  }

    const component_map = {
        play: CatPlay,
        stand: CatStand,
        sit: CatSit,
        sleep: CatSleep,
    };

    $: xScale = d3.scaleLinear()  
        .domain([0, 400])
        .range([margin.left, width - margin.left - margin.right])

    const yScale = d3.scaleLinear()
        .domain([300, 0])
        .range([height - margin.top - margin.bottom, 0])

    let hoveredData;
    let tooltipX = 0;
    let tooltipY = 0;

    function handleHover(cat, event) {
        hoveredData = cat;
        tooltipX = event.clientX + 10 ; // offset for visibility
        tooltipY = event.clientY + 10;
    }
</script>

<main>
<div class="header">
<h1>Lazy cats (v0)</h1>
<p>Test for how to display custom svgs and add tooltips to them.</p>
</div>
<div
    class="chart-container"
    role="button"
    tabindex="0"
    bind:clientWidth={width}
    on:mouseleave={() => {
        hoveredData = null;
    }}
>
    <svg width={width} height={height} overflow="visible">
        {#each cats as cat}
            {#if component_map[cat.position]}
                <svelte:component
                    this={component_map[cat.position]}
                    season={colr_dict[cat.season]}
                    stripe1={cat.stripe1}
                    stripe2={cat.stripe2}
                    stripe3={cat.stripe3}
                    x={xScale(cat.x)}
                    y={yScale(cat.y)}
                    on:mouseover={(e) => handleHover(cat, e)}
                    on:focus={(e) => handleHover(cat, e)}
                    tabindex="0"
                />
            {/if}
        {/each}
    </svg>

    {#if hoveredData}
        <div
            class="tooltip"
            style="position: absolute; top: {tooltipY}px; left: {tooltipX}px;"
        >
            <h2>{hoveredData.name}</h2>
            <p class="byline">({hoveredData.gender})</p>
            <p>Likes to {hoveredData.position}</p>
        </div>
    {/if}
</div>
</main>
<!--

 -->

<style>

    .header {
        text-align: center;
        padding-bottom: 4rem;
    }

    .tooltip {
        transform: translateX(-50%);
        padding-left: 6px;
        padding-right: 6px;
        min-width: 120px;
        background: white;
        border-radius: 4px;
        line-height: 6px;
        border: 0px solid;
        pointer-events: none;
        transition:
            top 200ms ease,
            left 200ms ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    h1 {
        font-family: "Inter", sans-serif;
        font-weight: 700;
        font-size: 2.4rem;
        margin-bottom: 2rem;
    }

    h2 {
        font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 1.05rem;
        margin-bottom: 1rem;
    }

    p {
        font-family: "Inter", sans-serif;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.65em;
        margin-bottom: 0.5rem;
        color: rgb(22, 22, 22);
    }

    .byline {
        font-family: "Inter", sans-serif;
        font-weight: 300;
        font-size: 0.7rem;
        line-height: 1em;
        margin-bottom: 0.2rem;
        color: rgb(22, 22, 22);
    }

    main {
    max-width: 768px;
    margin: 20px auto 0px auto;   
    }

    div {

    }
</style>
