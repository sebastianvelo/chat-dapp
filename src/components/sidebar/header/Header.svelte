<script>
    import Avatar from "../../common/avatar/Avatar.svelte";
    import Button from "../../atom/Button.svelte";
    import { username, signout } from "../../../utils/GunUserUtils";

    const className = "text-white py-3 w-full";
</script>

<header class={className}>
    {#if $username}
        <div class="md:space-y-4 flex items-center flex-col">
            <Button onClick={signout} label="Sign out" />
            <div class="flex space-x-4 items-center">
                <Avatar username={$username} />
                <h1>{$username}</h1>
            </div>
        </div>
    {:else}
        <div>
            <h1 class="text-xl font-bold">Superchat</h1>
        </div>
    {/if}
</header>
