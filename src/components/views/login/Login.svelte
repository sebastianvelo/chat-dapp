<script>
    import Button from "../../atom/Button.svelte";
    import Input from "../../atom/Input.svelte";
    import InputRow from "./input-row/InputRow.svelte";
    import { login, signup } from "../../../utils/GunUserUtils";

    let username;
    let password;
    const className =
        "bg-gray-900 text-white flex flex-col items-center space-y-4 w-full min-h-screen";
</script>

<div class={className}>
    <InputRow>
        <Input name="username" bind:value={username} label="Username" />
    </InputRow>
    <InputRow>
        <Input
            type="password"
            name="password"
            label="Password"
            bind:value={password}
        />
    </InputRow>
    <div class="space-x-4 flex">
        <Button onClick={() => login(username, password)} label="Login" />
        <Button onClick={() => signup(username, password)} label="Sign Up" />
    </div>
</div>
