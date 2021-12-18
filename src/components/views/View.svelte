<script>
    import Login from "./login/Login.svelte";
    import Chat from "./chat/Chat.svelte";
    import { username } from "../../utils/GunUserUtils";
</script>

<div class="w-screen md:w-2/3">
    {#if $username}
        <Chat />
    {:else}
        <Login />
    {/if}
</div>
