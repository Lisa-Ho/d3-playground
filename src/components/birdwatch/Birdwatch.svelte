<script>
import { data } from "./stores";
import * as d3 from 'd3';

let selectedRegion = "UK";
$: renderedData = $data
    .filter(d => d.Region_name === selectedRegion) 
    .sort((a,b) => a.Year - b.Year)
    .map(d => {
        return {
        ...d,
        Count: +d.Count
        }
    })

$: console.log(renderedData);
let speciesData =[]


$: speciesData = d3.groups(renderedData, d => d.Species)
$: console.log(speciesData);


</script>


<h1>Top 10 Birds</h1>

<!-- Dropdown to select region -->
<select bind:value={selectedRegion}>
    <option value="UK">UK</option>
    <option value="N Ireland">North Ireland</option>
    <option value="Scotland">Scotland</option>
    <option value="Wales">Wales</option>
</select>

<!-- Dropdown to select region -->
<main>
{#each renderedData as d}
  <div>
    <p>{d.Species}: {d.Count} in {d.Year}</p>
  </div>
{/each}
</main>
