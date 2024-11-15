// 1. 击鼓传花
// ["why", "james", "kobe", "curry"]

import { ArrayQueue } from "./ArrayQueue";

// 刚开始都在队列里。
// 然后开始数，先出队，再进队。
// bingo 的人出队。
// 然后接着数，
// 什么时候循环结束呢？ 队列中只剩下一个人的时候

// 循环 queue.size > 1
// 循环体中的操作：
// 1> 数 1 和 2 的人，出队、入队
// 2> 数 3 的人，出队
// return queue.dequeue()

function hotPotato(names: string[], drum: number) {
  const queue = new ArrayQueue();
  // 所有人入队
  for (let i = 0; i < names.length; i++) {
    queue.enqueue(names[i]);
  }
  while (queue.size > 1) {
    for (let i = 1; i <= drum; i++) {
      // 1/2 不淘汰
      if (i < drum) {
        const person = queue.dequeue();
        queue.enqueue(person);
      } else {
        // 3 淘汰
        queue.dequeue();
      }
    }
  }

  return queue.dequeue()!;
}

// console.log(hotPotato(["why", "james", "kobe", "curry"], 4));

// 2. 约瑟夫环
// 阿桥问题
// https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/description/

function iceBreakingGame(num: number, target: number): number {
  const queue = new ArrayQueue<number>();
  for (let i = 0; i < num; i++) {
    queue.enqueue(i);
  }

  while (queue.size > 1) {
    // 前面的人，出队、之后入队
    for (let i = 1; i < target; i++) {
      const index = queue.dequeue()!;
      queue.enqueue(index);
    }
    // 这个就是数到那个数的人，直接出队
    queue.dequeue();
  }

  return queue.dequeue()!;
}

console.log("🚀 ~ iceBreakingGame(7, 4):", iceBreakingGame(7, 4)); // 1
console.log("🚀 ~ iceBreakingGame(12, 5):", iceBreakingGame(12, 5)); // 0
console.log("🚀 ~ iceBreakingGame(7, 4):", iceBreakingGame(5, 3)); // 3
console.log("🚀 ~ iceBreakingGame(7, 4):", iceBreakingGame(10, 17)); // 2
