<script lang="ts">
  import type { Board } from '$lib/stores/boardsStore.svelte';

  type Props = {
    board: Board;
    //handle clicks later
    onclick?: () => void;
  };

  let { board, onclick }: Props = $props();

  //placeholder color logic
  const styleColors: Record<string, string> = {
    modern: '#3b82f6',
    industrial: '#ef4444',
    minimal: '#8b5cf6',
  };

  const borderColor = $derived(
    board.color || styleColors[board.style] || '#64748b'
  );
</script>

<button class="board-item" style="--item-color: {borderColor}" {onclick}>
  <div class="icon" style="border-color: {borderColor}"></div>
  <span class="board-name">{board.name}</span>
  <!-- placeholder tag -->
  <span class="tag">Tag</span>
</button>

<style>
  .board-item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.65rem;
    background: var(--white);
    border: var(--board-item-border-width) solid var(--color-layout-border);
    border-radius: var(--rounded-full);
    box-shadow: var(--shadow-layout);
    cursor: pointer;    
    transition: all 0.15s ease;
    text-align: left;
  }

  .board-item:hover {
    border-color: var(--item-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* placeholder icon */

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid;
    border-radius: 4px;
    flex-shrink: 0;
  }

  .board-name {
    flex: 1;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-placeholder-text);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* raw design for item */
  .tag {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--color-placeholder-text-muted);
    background: var(--color-layout-surface-1);
    border: 1px solid var(--color-layout-border);
    border-radius: 0.375rem;
    flex-shrink: 0;
  }
</style>