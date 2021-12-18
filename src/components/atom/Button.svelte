<script>
    export let onClick;
    export let label;

    const className = "px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white w-96";
</script>

<button class={className} on:click={onClick}>{label}</button>
