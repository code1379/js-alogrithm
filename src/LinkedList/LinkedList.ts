class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  // append

  // insert

  // get

  // indexOf

  // update

  // removeAt

  // remove
  // isEmpty
  // size
}

interface ILink {}

export class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  // 追加节点
  append(val: T) {
    // 创建新节点
    const node = new Node(val);
    // 判断 head 是否为 null，只有第一次，才让 head 指向它
    if (!this.head) {
      this.head = node;
    } else {
      // 找到链表中最后一个节点
      // 创建当前指针，指向 head
      let p = this.head;
      // 循环结束后，指向最后一个节点
      while (p.next) {
        p = p.next;
      }
      // p 指针，指向最后一个节点
      p.next = node;
    }

    this.size++;
  }

  // insert(val, position) 在指定位置插入元素
  insert(value: T, position: number) {
    // 判断 position 越界问题
    if (position < 0 || position > this.size) {
      // throw new Error(`传入的${position}越界了，请检查`);
      return false;
    }
    // 创建新的节点
    const newNode = new Node(value);
    // 是否插入到头部
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // 红元老师这里用了双指针
      // 找 current 的时候找到前面的 prevNode
      let prevNode: Node<T> | null = null;
      let current = this.head;
      // 从 0 开始
      let index = 0;
      // while (index < position && current) {
      //   prevNode = current;
      //   current = current?.next;
      //   index++;
      // }
      //上面的代码可以写为
      // 怎么理解呢？
      // index++ 的值 是之前的值， 0 1 2 ，但是如果循环体里面用的话， i 的值已经加 1 了
      while (index++ < position && current) {
        prevNode = current;
        current = current?.next;
      }

      prevNode!.next = newNode;
      newNode.next = current;

      // 我的代码
      // // 找到前一个节点
      // let prevNode = this.head;
      // for (let i = 0; i < position - 1; i++) {
      //   prevNode = prevNode!.next;
      // }
      // const next = prevNode!.next;
      // prevNode!.next = newNode;
      // newNode.next = next;
    }
    this.size++;

    return true;
  }

  // 删除
  removeAt(position: number): T | undefined {
    if (position < 0 || position >= this.size) {
      return undefined;
    }
    let current = this.head;
    if (position === 0) {
      this.head = current?.next ?? null;
    } else {
      let prevNode: Node<T> | null = null;
      let i = 0;
      while (i++ < position && current) {
        prevNode = current;
        current = current?.next;
      }
      prevNode!.next = current?.next ?? null;
    }

    this.size--;

    return current?.value;
  }

  // get
  get(position: number): T | null {
    if (position < 0 || position >= this.size) {
      return null;
    }

    // if (position === 0) {
    //   return this.head?.value ?? null;
    // }
    // index 0 所在的位置就是 head
    let current = this.head;
    let index = 0;

    // 0 的时候其实是不会进来的，其实还是 head
    // (0 < 0)
    while (index++ < position) {
      current = current?.next || null;
    }

    return current?.value ?? null;
  }

  // 遍历链表的方法
  traverse() {
    let p = this.head;

    const values: T[] = [];
    while (p) {
      values.push(p.value);
      p = p.next;
    }
    console.log(values.join("->"));
  }

  get length() {
    return this.size;
  }
}

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
