<script>
    import Message from "./message/Message.svelte";
    export let messages;
    export let username;
</script>

<div class="max-h-full overflow-y-scroll space-y-4 max-w-1/2 flex flex-col">
    {#each messages as message (message.when)}
        <Message
            username={message.who}
            message={message.what}
            sender={username}
        />
    {/each}
</div>