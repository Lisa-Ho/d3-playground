<script>
    import Header from "../components/Header.svelte"
</script>

<Header/>

<section id="demo-link">
	<h2>Index</h2>
	<p><a href="bar-chart">Bar chart</a></p>
</section>


<style>

section {
  max-width: 40rem;
  margin: auto;   
}

section p {
    font-family: 'Poppins', sans-serif;
    font-weight: 300; 
    font-size: 1.15rem;
    line-height: 1.65em;
    margin-bottom: 1rem;
    color: #202020
}

section h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500; 
    font-size: 1.25rem;
    line-height: 1.65em;
    margin-bottom: 1rem;
    color: #202020
}

a {
    color: #343434; 
  }

a:hover {
    color: rgb(0, 157, 255);
  }

</style>