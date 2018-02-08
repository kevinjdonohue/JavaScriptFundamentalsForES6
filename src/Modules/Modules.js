/* eslint-disable no-console */

const sName = Symbol('used for hiding name');

// export a class
export class Employee {
  constructor(name) {
    this[sName] = name;
  }

  get name() {
    return this[sName];
  }

  doWork() {
    return `${this.name} is working`;
  }
}

// export a function
export const log = (employee) => {
  console.log(employee.name);
};

// export a constant
export const defaultRaise = 0.03;

// export an object - class instance
export const modelEmployee = new Employee('Scott');
