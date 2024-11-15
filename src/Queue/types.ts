export interface IQueue<T> {
  // 入队
  enqueue(element: T): void;
  // 出队
  dequeue(): T | undefined;
  // 队头 front | peek
  front(): T | undefined;

  isEmpty(): boolean;

  get size(): number;
}
