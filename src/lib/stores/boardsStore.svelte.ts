export type Board = {
  id: number;
  user_id: number;
  folder_id: number | null;
  name: string;
  style: string;
  order_index: number;
  color?: string;
};

//response type from the JSON file (Updated later to match actual server response)
type BoardsResponse = {
  status: string;
  count: number;
  boards: Board[];
};

class BoardsStore {
  boards = $state<Board[]>([]);
  loading = $state(true);
  error = $state<string | null>(null);

  //constructor

  async fetchBoards() {
    this.loading = true;
    this.error = null;
    
    // order fetching and error handling
    try {
      const response = await fetch('/board1.json');
      if (!response.ok) throw new Error('Failed to fetch boards');
      
      const data: BoardsResponse = await response.json();
      this.boards = data.boards.sort((a, b) => a.order_index - b.order_index);
    } catch (err) {
      this.error = err instanceof Error ? err.message : 'Unknown error';
    } finally {
      this.loading = false;
    }
  }
}

export const boardsStore = new BoardsStore();