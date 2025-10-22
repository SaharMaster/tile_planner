<script>
  import BoardsSpace from './boardsSpace.svelte';
  import ShortcutIsland from './shortcutIsland.svelte';
</script>

<div class="left-pane">
  <ShortcutIsland />
  <div class="boards-wrap">
    <BoardsSpace />
  </div>
  
</div>

<style>
  .left-pane {
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 0;
    width: var(--left-pane-width);
    background: var(--color-layout-surface-1);
    box-shadow: var(--shadow-layout);
  }

  .boards-wrap {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-layout-surface-1);
  }
</style>
