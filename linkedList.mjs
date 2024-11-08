export default class LinkedList {
  headNode = null;
  append(key, value) {
    if (!this.headNode) {
      this.headNode = new Node(key, value);
      return this.headNode;
    }
    let pointer = this.headNode;
    while (pointer.nextNode) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = new Node(key, value);
    return pointer.nextNode;
  }
  prepend(key, value) {
    if (!this.headNode) {
      this.headNode = new Node(key, value);
      return this.headNode;
    }
    let newNode = new Node(key, value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }
  size() {
    if (!this.headNode) {
      return 0;
    }
    let counter = 1;
    let pointer = this.headNode;
    while (pointer.nextNode) {
      pointer = pointer.nextNode;
      counter++;
    }
    return counter;
  }
  head() {
    return this.headNode;
  }
  tail() {
    if (!this.headNode) {
      return null;
    }
    let pointer = this.headNode;
    while (pointer.nextNode) {
      pointer = pointer.nextNode;
    }
    return pointer;
  }
  at(index) {
    let pointer = this.headNode;
    if (!this.headNode) {
      console.error(`The list is empty`);
      return null;
    }
    for (let i = 0; i < index; i++) {
      if (!pointer.nextNode) {
        console.error(`Out of range, the list max index is ${i}.`);
        return null;
      }
      pointer = pointer.nextNode;
    }
    return pointer;
  }
  pop() {
    if (!this.headNode) {
      console.error(`The list is empty`);
      return null;
    }
    if (!this.headNode.nextNode) {
      const temp = this.headNode;
      this.headNode = null;
      return temp;
    }
    let pointer = this.headNode;
    // move to node that is before the last onv and set it nextNode value to null
    while (pointer.nextNode.nextNode) {
      pointer = pointer.nextNode;
    }
    const temp = pointer.nextNode;
    pointer.nextNode = null;
    return temp;
  }
  removeAt(index) {
    if (!this.headNode) {
      console.error(`The list is empty`);
      return null;
    }
    let pointer = this.headNode;
    if (index === 0) {
      let tempNode = this.headNode;
      this.headNode = tempNode.nextNode;
      return tempNode;
    }
    for (let i = 0; i <= index; i++) {
      if (!pointer.nextNode && i < index) {
        console.error(`Out of range, the list max index is ${i}.`);
        return null;
      }

      if (index - i === 1) {
        pointer.nextNode = pointer.nextNode.nextNode;
        return pointer;
      }
      pointer = pointer.nextNode;
    }
    return pointer;
  }
  findKey(key) {
    if (!this.headNode) {
      return null;
    }
    let index = 0;
    let pointer = this.headNode;
    do {
      if (pointer.key === key) {
        return index;
      }
      pointer = pointer.nextNode;
      index++;
    } while (pointer);
    return null;
  }
  findValue(value) {
    if (!this.headNode) {
      return null;
    }
    let index = 0;
    let pointer = this.headNode;
    do {
      if (pointer.value === value) {
        return index;
      }
      pointer = pointer.nextNode;
      index++;
    } while (pointer);
    return null;
  }
  containsValue(value) {
    if (!this.headNode) {
      return false;
    }
    let index = 0;
    let pointer = this.headNode;
    do {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.nextNode;
      index++;
    } while (pointer);
    return false;
  }
  containsKey(key) {
    if (!this.headNode) {
      return false;
    }
    let index = 0;
    let pointer = this.headNode;
    do {
      if (pointer.key === key) {
        return true;
      }
      pointer = pointer.nextNode;
      index++;
    } while (pointer);
    return false;
  }
  toString() {
    if (!this.headNode) {
      return `null`;
    }
    let string = "";
    let pointer = this.headNode;
    do {
      string += `( ${pointer.key}: ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    } while (pointer);
    return string + String(pointer);
  }
  keys() {
    if (!this.headNode) {
      return null;
    }
    let keys = [];
    let pointer = this.headNode;
    do {
      keys.push(pointer.key);
      pointer = pointer.nextNode;
    } while (pointer);
    return keys;
  }
  values() {
    if (!this.headNode) {
      return null;
    }
    let values = [];
    let pointer = this.headNode;
    do {
      values.push(pointer.value);
      pointer = pointer.nextNode;
    } while (pointer);
    return values;
  }
  entries() {
    if (!this.headNode) {
      return null;
    }
    let entries = [];
    let pointer = this.headNode;
    do {
      entries.push([pointer.key, pointer.value]);
      pointer = pointer.nextNode;
    } while (pointer);
    return entries;
  }
}

class Node {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}
