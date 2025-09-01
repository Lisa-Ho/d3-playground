<script>
import CatPlay from "./CatPlay.svelte";

let cats = [{
    position : "play",
    season: "#53B8CC",
    stripe1: 0,
    stripe2: 0,
    stripe3: 0
    },
    {
    position : "play",
    season: "#BED567",
    stripe1: 1,
    stripe2: 1,
    stripe3: 1,
  }
]

</script>

<h1>Lazy Cats</h1>

{#each cats as {season, stripe1, stripe2, stripe3, position}}
    {#if position=="play"}
        <CatPlay 
        {season} {stripe1} {stripe2} {stripe3}
        >
        </CatPlay>
    {/if}
{/each}


