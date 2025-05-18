<script>
    import AxisX from "../../components/tutorial-newline/AxisX.svelte"
    import AxisY from "../../components/tutorial-newline/AxisY.svelte"
    import Tooltip from "../../components/tutorial-newline/Tooltip.svelte"
    import data from "../../data/tutorial-newline-data.js";
    import * as d3 from "d3";
    console.log(data)

    let width = 400;
    let height = 400; 

    const margin = {top: 20, right: 40, 
                    left: 0, bottom:20  }

    // $: = responsiveness, update based on clientWidth
    $: xScale = d3.scaleLinear()  
        .domain([0, 100])
        .range([0, width - margin.left - margin.right])
    
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.hours)])
        .range([height - margin.top - margin.bottom, 0])

    let hoveredData; 
    $: console.log(hoveredData)

    let sourceDiv;
    $: topPosition = 0;
    $: leftPosition = 0;

    function updatePosition() {
        if (sourceDiv) {
        const rect = sourceDiv.getBoundingClientRect();
        topPosition = rect.top + window.scrollY;
        leftPosition = rect.left;
        }
    }

</script>
<main> 
<section class="intro"> 
<h1>Newline Tutorial</h1>

<p>Followed along the <strong>'Your First Data Visualization With Svelte & D3'</strong> tutorial by Connor Rotschild for Newline</p>
<ul>
    <li><a href="https://www.youtube.com/watch?v=-THp2YVYEFc">YouTube video</a></li>
    <li><a href="https://codesandbox.io/p/sandbox/vigorous-sun-p46zj5">Sandbox code</a></li>
</ul>
<p>Added a bit more code for styling and positioning of tooltips (as div has moved down)</p>
</section>
<section class="scatterplot"> 
<h2>Study longer, score better!</h2>
<div class='chart-container' 
    role="button"
    tabindex="0"
    bind:clientWidth={width}
    on:mouseleave={() => {
        hoveredData = null; 
    }}
    bind:this={sourceDiv} 
    on:mouseenter={updatePosition}
    >
<svg width={width} height={height}>
    <AxisX {height} {xScale} {margin}/>
    <AxisY  {width} {height} {yScale} {margin}/>
    <g class="circles" 
        transform="translate({margin.left} {margin.top})">
    <!-- sort data for better tab navigation  --> 
    {#each data.sort((a,b) => a.grade - b.grade) as student}
    <circle role="button"    
            cx={xScale(student.grade)} 
            cy={yScale(student.hours)} 
            r={hoveredData && hoveredData == student ? "15" : "10"} 
            opacity={hoveredData ? hoveredData == student ? "1" : ".3" : "1"}
            fill="purple"
            stroke="black"
            on:mouseover={() => {
                hoveredData = student}
                }
            on:focus={() => {
                hoveredData = student;
              }}
              tabindex="0"
            />
        {/each}
    </g>
</svg>
{#if hoveredData}
    <Tooltip data={hoveredData} {xScale} {yScale} {topPosition} {leftPosition}/>
{/if}
</div>
</section>
</main>

<style>
    circle {
      transition: r 200ms ease, opacity 200ms ease;
      cursor: pointer;
    }
  
    circle:focus {
      outline: none;
    }
  
    h1 {
        font-family: "Inter";
      font-size: 2.4rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
    }

    h2 {
        font-family: "Inter";
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }

    main {
    max-width: 768px;
    margin: 50px auto 0px auto;   
    }

    section {
    padding-bottom: 25px;
    }

    p, li{
    font-family: 'Inter', sans-serif;
    font-weight: 400; 
    font-size: 1.15rem;
    line-height: 1.65em;
    margin-bottom: 1rem;
    color: rgb(22, 22, 22)
    }

  </style>