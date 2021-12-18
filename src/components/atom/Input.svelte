<script>
    export let type = "text";
    export let value;
    export let name;
    export let label;

    const typeAction = (node) => {
        node.type = type;
    };
</script>

{#if label}
    <label for={name}>{label}</label>
{/if}

<input
    autocomplete="off"
    class="text-white px-4 focus:border-none focus:outline-none bg-green-500 focus:bg-blue-900 transition-all duration-500 w-full"
    {name}
    use:typeAction
    bind:value
/>
