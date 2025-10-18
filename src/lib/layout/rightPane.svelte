<script>
  import BoardCanvas from './boardCanvas.svelte';
  import Navbar from './NavBar.svelte';
</script>

<div class="right-pane">
  <Navbar />
  <BoardCanvas />
</div>

<style>
  .right-pane {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    height: 100vh;
    background: var(--color-layout-bg);
  }
</style>
