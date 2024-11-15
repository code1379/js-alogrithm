import { IStack } from "./types";

export class ArrayStack<T> implements IStack<T> {
  private data: T[] = [];

  // 入栈
  push(element: T) {
    this.data.push(element);
  }

  // 出栈
  pop(): T | undefined {
    return this.data.pop();
  }

  // 查看栈顶元素
  peek(): T | undefined {
    return this.data.at(-1);
  }

  // 查看栈内元素数量
  get size(): number {
    return this.data.length;
  }

  // 查看是否为空
  isEmpty(): boolean {
    return this.data.length === 0;
  }
}
