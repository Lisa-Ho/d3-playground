<script>
import { data } from "./stores";
import { scaleLinear, line, curveBumpX, groups} from 'd3';

const lineGenerator = line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(curveBumpX);

let width = 500;
$: height = 550;
const pad = 15;

$: xScale = scaleLinear()
    .domain([2022, 2025])
    .range([pad, width-pad-130]);

$: yScale = scaleLinear()
    .domain([1, 10])
    .range([pad, height-pad]);

let selectedRegion = "UK";

$: filteredData = groups($data
    .filter(d => d.Region_name === selectedRegion) 
    .sort((a,b) => a.Year - b.Year)
    .map(d => {
        return {
        ...d,
        Count: +d.Count
        }
    }), 
    d => d.Species).map(([key, values]) => {
      return {
      key,
      values
    };
    });

$: renderedData = filteredData.map(d => {
    const renderedValues = d.values.map(v => {
        return {
            ...v,
            x: xScale(v.Year),
            y: yScale(v.Rank)
        };
    });
    return {
        ...d,
        values: renderedValues,
        path: lineGenerator(renderedValues.filter(d => d.Continuous !== 0)),
        stroke: "dodgerblue",
        strokeWidth: 4,
        opacity: 1,
    };
});

$: console.log(renderedData);
</script>

<main> 
<section class=header>
<h1>Top 10 Birds</h1>
<p> Explore the top 10 birds spotted in people's gardens 'in the UK, Northern Ireland, Scotland, and Wales from 2022 to 2025.</p>
</section>

<section class="user-input">
<!-- Dropdown to select region -->
 <div style="display: flex; align-items: center; justify-content: left; gap: 10px;"> 
<label for="region-select">Select Region </label>
<select bind:value={selectedRegion}>
    <option value="UK">UK</option>
    <option value="N Ireland">North Ireland</option>
    <option value="Scotland">Scotland</option>
    <option value="Wales">Wales</option>
</select>
</div>
</section>

<!-- 
{#each renderedData as  {values}}
{#each values as v}
  <div>
    <p>{v.Rank}</p>
  </div>
  {/each}
{/each}
-->

<div
    bind:clientWidth={width}
    class="chart-container"
>
<svg
    width={width}
    height={height}
    >
    {#each renderedData as {key, path, stroke, strokeWidth, opacity, values}}
    <text class="value-labels"
    x="{values[values.length -1].x + 20}"
    y="{values[values.length -1].y}"
    dy="0.1em"
    >
      {key}
    </text>    
    <path
        d={path}
        stroke={stroke}
        stroke-width={strokeWidth}
        opacity={opacity}
        fill="none"
    >
    </path>
    {#each values as v}
    <circle
        cx={v.x}
        cy={v.y}
        r="{0.45*Math.sqrt(width)}"
        fill={stroke} 
    /> 
    {/each}
    {/each}
</svg>
</div>
</main>

<style>

main {
        max-width: 1000px;
        margin: 20px auto 0px auto;   
}

section {
        padding-bottom: 20px;
    }

h1 {
        font-family: "Inter";
        font-size: 2.4rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
    }

select {
  font-weight: 400;
  font-size: 1em;
  font-family: 'Inter', sans-serif;
}

.chart-container {
  margin-top: 30px;
}

.value-labels, label {
    font-weight: 600;
    dominant-baseline: middle;
    font-family: 'Inter', sans-serif;
}

p{
        font-family: 'Inter', sans-serif;
        font-weight: 400; 
        font-size: 1rem;
        line-height: 1.65em;
        margin-bottom: 1rem;
        color: rgb(22, 22, 22)
    }
</style>