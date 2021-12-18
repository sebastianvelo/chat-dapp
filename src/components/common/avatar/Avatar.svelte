<script>
    import { getAvatar } from "../../../utils/UserUtils";
    export let username;
    export let className = "w-8 h-8 rounded-full";
</script>

<img class={className} src={getAvatar(username)} alt={username} />
