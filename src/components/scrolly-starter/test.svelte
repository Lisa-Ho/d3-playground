<script>
    import Scrolly from "./Scrolly.svelte";
    let value; // 1. value is initially undefined; it will update thanks to <Scrolly />
    $: console.log({ value }) // 2. You can see the value updating in the console
</script>

<Scrolly bind:value> <!-- 3. This is what updates value -->
    {#each ['Hello', 'Scrollytelling', 'World!'] as text, i}
        <div class="step" class:active={value === i}> <!-- 4. Dynamically applies the active class -->
            <div class="step-content">
                <p>{text}</p> 
            </div>
        </div>
    {/each}
</Scrolly>

<style>
	.step {
		height: 80vh;
		opacity: .3;
		background: plum;
		transition: opacity 300ms ease;
		display: flex;
		justify-content: center;
		place-items: center;
	}
	
	.step.active {
		opacity: 1;
	}
</style>
