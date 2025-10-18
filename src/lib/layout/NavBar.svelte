<script>
  // No props yet; purely presentational
  const title = 'Tile Planner';
</script>

<nav class="navbar">
  <div class="bar">
    <h1 class="board-name">{title}</h1>
  </div>
</nav>

<style>
  .navbar {
    width: 100%;
    padding: var(--layout-padding);
    background: var(--color-layout-bg);
  }

  .bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--color-layout-surface-1);
    border: var(--border-width) solid var(--color-layout-border);
    border-radius: var(--layout-corner-radius);
    box-shadow: var(--shadow-layout);
  }

  .board-name {
    font-size: 1.25rem; /* ~text-xl */
    padding: var(--text-layout-padding);
    font-weight: 600;
    color: var(--color-placeholder-text);
    margin: 0;
  }
</style>