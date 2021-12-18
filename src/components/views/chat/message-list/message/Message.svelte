<script>
    import Avatar from "../../../../common/avatar/Avatar.svelte";
    export let username;
    export let message;
    export let sender;

    const itsSender = () => sender === username;
    const senderClass = itsSender() ? "self-end" : "";

    const className = `${senderClass} flex items-start space-x-4 p-4 w-max `;
    const messageClass = `w-64 md:w-96 max-h-32 overflow-x-auto p-4 bg-black rounded-lg text-white `;
</script>

<div class={className}>
    {#if !itsSender()}
        <Avatar {username} />
    {/if}
    <div class={messageClass}>
        <h1 class="text-pink-200">{username}</h1>
        <p class="break-words">{message}</p>
    </div>
    {#if itsSender()}
        <Avatar {username} />
    {/if}
</div>
