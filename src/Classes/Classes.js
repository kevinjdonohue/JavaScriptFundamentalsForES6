/* eslint-disable class-methods-use-this */

// Base Class
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  getName() {
    return this._name;
  }

  doWork() {
    return 'free';
  }
}

// Class Declaration syntax
class Employee extends Person {
  constructor(name, title) {
    super(name);
    this._title = title;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  getTitle() {
    return this._title;
  }

  doWork() {
    return 'paid';
  }

  getName() {
    return `${this._title}: ${this._name}`;
  }
}

export { Person, Employee };
