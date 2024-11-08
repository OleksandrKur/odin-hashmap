import LinkedList from "./linkedList.mjs";

export default class Hashmap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = Array.from({ length: capacity }, () => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    let capacity = this.capacity;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % capacity;
  }
  set(key, value) {
    const hash = this.hash(key);
    let index = this.buckets[hash].findKey(key);
    if (index === null || index === undefined) {
      this.buckets[hash].append(key, value);
    } else {
      console.log(`${key} already exists, updating value`);
      let currentItem = this.buckets[hash].at(index);
      currentItem.value = value;
    }
    return true;
  }
  get(key) {
    const hash = this.hash(key);
    let index = this.buckets[hash].findKey(key);
    if (index === null || index === undefined) {
      return null;
    } else {
      let currentItem = this.buckets[hash].at(index);
      return currentItem.value;
    }
  }
  has(key) {
    const hash = this.hash(key);
    let index = this.buckets[hash].findKey(key);
    if (index === null || index === undefined) {
      return false;
    } else {
      return true;
    }
  }
  remove(key) {
    const hash = this.hash(key);
    let index = this.buckets[hash].findKey(key);
    if (index === null || index === undefined) {
      return false;
    } else {
      his.buckets[hash].removeAt(index);
      return true;
    }
  }
  length() {
    let length = 0;
    this.buckets.forEach((bucket) => {
      length += bucket.size();
    });
    return length;
  }
  clear() {
    this.buckets.forEach((bucket) => {
      while (bucket.size()) {
        bucket.pop();
      }
    });
    return true;
  }
  keys() {
    let keys = [];
    this.buckets.forEach((bucket) => {
      let bucketKeys = bucket.keys();
      if (bucketKeys) {
        keys = keys.concat(bucketKeys);
      }
    });
    return keys;
  }
  values() {
    let values = [];
    this.buckets.forEach((bucket) => {
      let bucketValues = bucket.values();
      if (bucketValues) {
        values = values.concat(bucketValues);
      }
    });
    return values;
  }
  entries() {
    let entries = [];
    this.buckets.forEach((bucket) => {
      let bucketEntries = bucket.entries();
      if (bucketEntries) {
        entries = entries.concat(bucketEntries);
      }
    });
    return entries;
  }
}
