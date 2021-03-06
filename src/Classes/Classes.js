// import ArrayIterator from '../Iterators/Iterators';
/* eslint-disable class-methods-use-this, no-restricted-syntax */
import 'babel-polyfill';

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

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployees(...names) {
    this.employees = this.employees.concat(names);
  }

  // instead of using the ArrayIterator, we create a generator function instead
  * [Symbol.iterator]() {
    // return new ArrayIterator(this.employees);
    for (const e of this.employees) {
      yield e;
    }
  }
}

export { Person, Employee, Company };
