<script>
    import MessageList from "./message-list/MessageList.svelte";
    import MessageSender from "./message-sender/MessageSender.svelte";
    import { onMount } from "svelte";
    import { username, getMessage } from "../../../utils/GunUserUtils";
    import { chats } from "../../../utils/GunMessageUtils";

    const className = "bg-gray-900 w-full h-screen flex flex-col justify-between";
    let newMessage;
    let messages = [];

    onMount(() => {
        chats.map().once(async (data, id) => {
            if (data) {
                const key = "#foo";
                let message = await getMessage(data, key);
                if (message.what) {
                    messages = [...messages.slice(-100), message];
                }
            }
        });
    });
</script>

<main class={className}>
    <MessageList {messages} username={$username} />
    <MessageSender bind:newMessage />
</main>
