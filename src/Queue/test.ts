import { ArrayQueue } from "./ArrayQueue";

const queue = new ArrayQueue<string>();

queue.enqueue("aaa");
queue.enqueue("bbb");
queue.enqueue("ccc");

console.log("queue.dequeue()", queue.dequeue());
console.log("queue.front()", queue.front());
console.log("queue.isEmpty()", queue.isEmpty());

console.log("queue.size", queue.size);
