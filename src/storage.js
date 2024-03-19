export default class Storage {
  constructor(collection) {
    this.collection = collection;
    this.data = JSON.parse(localStorage.getItem(collection)) || {};
  }

  save() {
    localStorage.setItem(this.collection, JSON.stringify(this.data));
  }

  exists(key) {
    const data = JSON.parse(localStorage.getItem(this.collection)) || {};
    return data.hasOwnProperty(key);
  }

  create(key, value) {
    this.data[key] = value;
    this.save();
  }

  read(key) {
    return this.data[key];
  }

  update(key, value) {
    if (this.data.hasOwnProperty(key)) {
      this.data[key] = value;
      this.save();
    }
  }

  delete(key) {
    if (this.data.hasOwnProperty(key)) {
      delete this.data[key];
      this.save();
    }
  }
}
