/* eslint-disable no-console */

// export a class
export class Employee {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
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
