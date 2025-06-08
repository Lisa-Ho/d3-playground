<script>
    import {getContext, onMount, onDestroy, afterUpdate} from 'svelte';
    import { tweened } from 'svelte/motion';

    export let x; 
    export let y;
    export let r;
    export let fill;
    export let contextName = 'canvas';

    const {register, deregister, invalidate} = getContext(contextName);

    const tweenParams = {
        duration : 1000
    };
    const tX = tweened(undefined, tweenParams);
    const tY = tweened(undefined, tweenParams);
    const tR = tweened(undefined, tweenParams);

    function draw(ctx) {
        /*ctx.translate($tX, $tY); couldn't get this to work' */
        ctx.translate(x, y);
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(0,0, r, 0, 2 * Math.PI, false);
        ctx.fill();
    }

    onMount(() => {
        register(draw);
        invalidate();
    });

    onDestroy(() =>{
        deregister(draw);
    });

    afterUpdate(invalidate);
    $: tX.set(x);
    $: tY.set(y);
    $: tR.set(r);
    


</script>

