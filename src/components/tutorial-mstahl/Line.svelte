<script>
import { dataByYear, dayOfYearDomain, valueDomain } from "./stores"
import { scaleLinear, line, curveMonotoneX} from "d3";

const lineGenerator = line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(curveMonotoneX);

let width = 0;
$: height = width/1.5;
const pad = 15;

const colors = {
    2023: 'deepPink',
    2024: 'cyan',
    other: '#ffffff'
};

$: xScale = scaleLinear()
    .domain($dayOfYearDomain)
    .range([pad, width-pad]);

$: yScale = scaleLinear()
    .domain($valueDomain)
    .range([height-pad*2, pad*2]);

$: renderedData = $dataByYear.map(d => {
    const renderedValues = d.values.map(v => {
        return {
            ...v,
            x: xScale(v.day_of_year),
            y: yScale(v.value)
        };
    });
    return {
        ...d,
        values: renderedValues,
        path: lineGenerator(renderedValues),
        stroke: colors[d.key] || colors.other,
        strokeWidth: [2024, 2023].includes(d.key) ? 0.0045*width : 0.0015*width,
        opacity: [2024, 2023].includes(d.key) ? 1 : 0.15
    
    };
});
</script>

<div
    bind:clientWidth={width}
>
<svg
    width={width}
    height={height}>
    {#each renderedData as {path, stroke, strokeWidth, opacity}}
    <path
        d={path}
        stroke={stroke}
        stroke-width={strokeWidth}
        opacity={opacity}
    >
    </path>
    {/each}
</svg>
</div>

<style>
    div {
        background: #000000 ;
    }

    path {
        fill: none;
        stroke-linecap: round;
    }
</style>