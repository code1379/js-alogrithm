import { LinkedList } from "./LinkedList";

const link = new LinkedList<string>();
link.append("aaa");
link.append("bbb");
link.append("ccc");
link.append("ddd");
link.insert("abc", 0);
link.traverse();
link.insert("bab", 3);
link.insert("nba", 6);
link.traverse();
link.removeAt(0);
link.traverse();
link.removeAt(2);
link.traverse();
link.removeAt(4);
link.traverse();

console.log("link.get(0)", link.get(0));
// console.log("link.get(1)", link.get(1));
// console.log("link.get(2)", link.get(2));

link.update("111", 0);
link.traverse();

console.log('link.indexOf("bbb")', link.indexOf("bbb"));
console.log('link.indexOf("111")', link.indexOf("111"));
console.log('link.indexOf("xxx")', link.indexOf("xxx"));
link.remove("ddd");
link.remove("111");
link.traverse();
