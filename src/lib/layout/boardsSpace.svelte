<aside class="boards-space">
  <div class="panel inner">
    <div class="name-wrapper">
      <p>My boards</p>
      </div>
      <hr class="divider">
    </div>
</aside>

<style>
  .boards-space {
    width: var(--left-pane-width);
    height: 100%;
    padding: var(--layout-padding);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-layout-bg);
    --divider-gap: clamp(8px, 2vw, var(--layout-padding));
  }
  .inner {
    width: calc(100% - var(--layout-padding));
    height: calc(100% - var(--layout-padding));
  }
  .name-wrapper {
    padding: var(--layout-padding);
    border: var(--border-width) solid var(--color-layout-border);
    border-radius: var(--layout-corner-radius);
    box-shadow: var(--shadow-layout);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: var(--color-layout-surface-2);
  }
  .divider {
    margin: var(--layout-padding) var(--divider-gap) 0;
    width: auto;
    border: 0;
    border-top: var(--border-width) solid var(--color-layout-border);
  }
</style>

