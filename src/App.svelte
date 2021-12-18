<script>
  import Sidebar from "./components/sidebar/Sidebar.svelte";
  import View from "./components/views/View.svelte";
</script>

<main class="bg-black flex flex-col md:flex-row items-center justify-center min-h-screen">
  <Sidebar />
  <View />
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
