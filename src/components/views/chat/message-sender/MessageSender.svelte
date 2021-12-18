<script>
    import Input from "../../../atom/Input.svelte";
    import Button from "../../../atom/Button.svelte";
    import { saveMessage } from "../../../../utils/GunMessageUtils";

    export let newMessage;

    const sendMessage = async () => {
        await saveMessage(newMessage);
        newMessage = "";
    };
</script>

<div class="flex w-full justify-between">
    <Input name="message" bind:value={newMessage} />
    <Button onClick={sendMessage} label="Send" />
</div>
