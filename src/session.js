export default class Session {
  constructor(collection) {
    this.collection = collection;
    this.data = JSON.parse(sessionStorage.getItem(collection)) || {};
  }

  save() {
    sessionStorage.setItem(this.collection, JSON.stringify(this.data));
  }

  create(key, value) {
    this.data[key] = value;
    this.save();
  }

  read(key) {
    return this.data[key];
  }

  delete(key) {
    if (this.data.hasOwnProperty(key)) {
      delete this.data[key];
      this.save();
    }
  }

  exists(key) {
    return this.data.hasOwnProperty(key);
  }
}
