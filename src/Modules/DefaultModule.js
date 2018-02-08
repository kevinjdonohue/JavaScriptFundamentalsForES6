/* doesn't require destructuring, can be named anything by the importer */
export default class Manager {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  superviseWork() {
    return `${this.name} is supervising work`;
  }
}
