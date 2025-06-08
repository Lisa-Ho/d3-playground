<script>
import Circles from "../../components/tutorial-mstahl/Circles.svelte"
import CirclesCanvas from "../../components/tutorial-mstahl/CirclesCanvas.svelte"
import Voronoi from "../../components/tutorial-mstahl/Voronoi.svelte"
</script>

<main>
    <section class="intro"> 
        <h1>Matthias Stahl Tutorial</h1>
        
        <p>Followed along the <strong>'Svelte & D3 training'</strong> by Matthias Stahl</p>
        <ul>
            <li><a href="https://www.youtube.com/playlist?list=PLNvnDrMLMSipfbxSp1Z4v9Ydu2ud5i9V8">YouTube video</a></li>
            <li><a href="https://github.com/higsch/svelte-d3-training/tree/main">Github code</a></li>
        </ul>
        </section>

    <section class="circles">
        <h2>Circles</h2>    
        <Circles/>
        <!---->
    </section>

    <section class="voronoi">
        <h2>Voronoi</h2>  
        <Voronoi/>
    </section>
        
</main>


<style>

    main {
        max-width: 768px;
        margin: 50px auto 0px auto;   
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

    p, li{
        font-family: 'Inter', sans-serif;
        font-weight: 400; 
        font-size: 1rem;
        line-height: 1.65em;
        margin-bottom: 1rem;
        color: rgb(22, 22, 22)
    }
</style>