<script>
    /* By Connor Rothschild https://twitter.com/CL_Rothschild
	Scrollytelling component from Russell Goldenberg https://twitter.com/codenberg/status/1432774653139984387 */
    import Scatterplot from "./Scatterplot.svelte"
    import Scrolly from "./Scrolly.svelte";

    let currentStep;
    const steps = [
            "<p>This is a dynamic, responsive scatterplot that uses Russell Goldenberg's <a href='	https://twitter.com/codenberg/status/1432774653139984387' target='_blank'><code>Scrolly</code></a> to update its points' values on scroll.</p>",
            "<p>The scatterplot uses tweened values to automatically update your points with smooth transitions. It also binds to the width of the container <code>div</code>, so its responsive by default.</p>",
            "<p>Try resizing me to see the 'side-by-side' version, compared to the 'text-on-top' version that appears on small screens.</p><p>Want it to always appear 'text-on-top'? Just comment out the media query at the bottom of our styles (as in, leave the styles but comment out the surrounding <code>media</code> query).</p>",
            ];
</script>

<section>
	<div class='hero'>
		<h1> 
			A Svelte Visualization Scrollytelling Starter Kit
		</h1>
		<h2>
			A <a href='https://www.sveltecharts.com/charts/01e9128d-7056-4de0-bfc2-242328f1aedf' target="_blank">starter kit</a> by Connor Rothschild
		</h2>
	</div>

    <div class="section-container">
        <div class="steps-container">
          <Scrolly bind:currentStep>
            {#each steps as text, i}
              <div class="step" class:active={currentStep === i}>
                <div class="step-content">{@html text}</div>
              </div>
            {/each}
            <div class="spacer"></div>
          </Scrolly>
        </div>
        <div class="sticky">
          <Scatterplot step={currentStep} />
        </div>
      </div>

      <div class='hero'>
		<h2> 
			Thanks!
		</h2>
		<p>
			<a href='https://twitter.com/CL_Rothschild' target="_blank">Questions and Tips</a>
    </p>
	</div>
</section>


<style>
	:global(body) {
		overflow-x: hidden;
	}
	
	.hero {
		height: 60vh;
		display: flex;
		place-items: center;
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}
	
	.hero h2 {
		margin-top: 0;
		font-weight: 500;
    font-family: "Inter";
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
	}

  .hero h1 {
		margin-top: 0;
    font-family: "Inter";
    font-size: 2.4rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
	}
	
  .spacer {
    height: 40vh;
  }

  .sticky {
    position: sticky;
    top: 10%;
		flex: 1 1 60%;
    width: 60%;
  }

  .section-container {
    margin-top: 1em;
    margin-right: 2em;
    text-align: center;
    transition: background 100ms;
    display: flex;
  }

  .step {
    height: 80vh;
    display: flex;
    place-items: center;
    justify-content: center;
  }

  .step-content {
    background: whitesmoke;
    color: #ccc;
    border-radius: 5px;
    padding: .2rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: background 500ms ease;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
    text-align: left;
		width: 75%;
		margin: auto;
		max-width: 500px;
    font-family: 'Inter', sans-serif;
    font-weight: 400; 
    font-size: 1rem;
    line-height: 1.65em;
  }

	.step.active .step-content {
		background: white;
		color: black;
	}
	
  .steps-container,
  .sticky {
    height: 100%;
  }

  .steps-container {
    flex: 1 1 40%;
    z-index: 10;
  }

  p {
        font-family: 'Inter', sans-serif;
        font-weight: 400; 
        font-size: 1rem;
        line-height: 1.65em;
        margin-bottom: 1rem;
        color: rgb(22, 22, 22)
    }

	
/* Comment out the following line to always make it 'text-on-top' */
  @media screen and (max-width: 768px) {
    .section-container {
      flex-direction: column-reverse;
      margin-right: 0em;
    }
    .sticky {
      width: 95%;
			margin: auto;
    }
  }

  

</style>
