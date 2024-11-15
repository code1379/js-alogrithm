import { IStack } from "./types";

class LinkedStack<T> implements IStack<T> {
  push(element: T): void {
    throw new Error("Method not implemented.");
  }
  pop(): T | undefined {
    throw new Error("Method not implemented.");
  }
  peek(): T | undefined {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  get size(): number {
    throw new Error("Method not implemented.");
  }
}
