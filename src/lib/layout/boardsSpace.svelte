<script lang="ts">
  import { boardsStore } from '$lib/stores/boardsStore.svelte';
  import BoardItem from '$lib/elements/boardItem.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    boardsStore.fetchBoards();
  });

  function handleBoardClick(boardId: number) {
    console.log('Board clicked:', boardId);
  }
</script>

<aside class="boards-space">
  <div class="panel inner">
    <div class="name-wrapper">
      <p>My boards</p>
    </div>
    <hr class="divider" />
    
    <div class="boards-list">
      {#if boardsStore.loading}
        <p class="status-text">Loading boards...</p>
      {:else if boardsStore.error}
        <p class="status-text error">{boardsStore.error}</p>
      {:else if boardsStore.boards.length === 0}
        <p class="status-text">No boards found</p>
      {:else}
        {#each boardsStore.boards as board (board.id)}
          <BoardItem {board} onclick={() => handleBoardClick(board.id)} />
        {/each}
      {/if}
    </div>
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
  }

  .inner {
    width: calc(100% - var(--layout-padding));
    height: calc(100% - var(--layout-padding));
    display: flex;
    flex-direction: column;
  }

  .name-wrapper {
    padding: var(--layout-padding);
    border: var(--border-none);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: var(--color-layout-surface-1);
  }

  .divider {
    margin: 0 var(--divider-gap) 0;
    width: auto;
    border: 0;
    border-top: var(--border-width) solid var(--color-layout-border);
  }

  .boards-list {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: var(--layout-padding) var(--divider-gap);
  }

  .status-text {
    text-align: center;
    color: var(--color-placeholder-text-muted);
    font-size: 0.875rem;
    padding: 1rem;
  }

  /* error handling */

  .status-text.error {
    color: #ef4444;
  }
</style>