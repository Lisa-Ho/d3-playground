<script>
    export let width;
    export let height;
</script>

<div 
    bind:clientWidth={width}
>
    <svg 
    width={width} 
    height={height}
    >
    <slot/>
    </svg>
</div>