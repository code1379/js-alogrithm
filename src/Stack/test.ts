import { ArrayStack } from "./ArrayStack";

const stack1 = new ArrayStack<string>();
stack1.push("aaa");
stack1.push("bbb");
stack1.push("ccc");
console.log("stack1.peek()", stack1.peek());
console.log("stack1.pop()", stack1.pop());
console.log("stack1.pop()", stack1.pop());
console.log("stack1.pop()", stack1.pop());
console.log("stack1.isEmpty()", stack1.isEmpty());
console.log("stack1.size", stack1.size);
