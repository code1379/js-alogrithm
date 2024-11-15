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
  // 根据 position 获取到当前节点Node
  private getNode(position: number): Node<T> | null {
    let index = 0;
    let current = this.head;

    while (index++ < position && current) {
      current = current.next;
    }

    return current;
  }
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
      const prevNode = this.getNode(position - 1);
      const curret = prevNode?.next;
      prevNode!.next = newNode;
      newNode.next = curret ?? null;
    }
    this.size++;

    return true;
  }

  // 删除
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) {
      return null;
    }
    let current = this.head;
    if (position === 0) {
      this.head = current?.next ?? null;
    } else {
      const prevNode: Node<T> | null = this.getNode(position - 1);
      prevNode!.next = prevNode?.next?.next ?? null;
    }

    this.size--;

    return current?.value ?? null;
  }

  // get
  get(position: number): T | null {
    if (position < 0 || position >= this.size) {
      return null;
    }

    return this.getNode(position)?.value ?? null;
  }

  // update
  update(element: T, position: number) {
    if (position < 0 || position >= this.size) {
      return false;
    }

    const current = this.getNode(position);
    current!.value = element;
    return true;
  }

  // indexOf 根据元素获取索引
  indexOf(value: T): number {
    let index = 0;
    let current: Node<T> | null = this.head;
    // while (index < this.size - 1) {
    //   if (current?.value == value) {
    //     return index;
    //   }

    //   current = current?.next ?? null;
    //   index++;
    // }

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  // remove
  remove(value: T): T | null {
    const index = this.indexOf(value);
    if (index === -1) return null;
    return this.removeAt(index);
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
