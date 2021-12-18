<script>
    import Avatar from "../../../../common/avatar/Avatar.svelte";
    export let username;
    export let message;
    export let sender;

    const senderClass = sender === username ? "self-end" : "";
    const senderMessageClass = sender === username ? "order-last" : "";

    const className = `${senderClass} flex items-start space-x-4 p-4 w-max `;
    const messageClass = `${senderMessageClass} w-96 max-h-32 overflow-x-auto p-4 bg-black rounded-lg text-white `;
</script>

<div class={className}>
    <Avatar {username} />
    <div class={messageClass}>
        <h1 class="text-pink-200">{username}</h1>
        <p class="break-words">{message}</p>
    </div>
</div>
