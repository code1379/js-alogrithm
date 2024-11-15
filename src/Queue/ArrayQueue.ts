import { IQueue } from "./types";

export class ArrayQueue<T> implements IQueue<T> {
  private data: T[] = [];

  // 入队
  enqueue(element: T) {
    this.data.push(element);
  }
  // 出队
  dequeue() {
    return this.data.shift();
  }

  // 队头 front | peek
  front() {
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  get size() {
    return this.data.length;
  }
}
