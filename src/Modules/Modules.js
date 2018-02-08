/* eslint-disable no-console */

const sName = Symbol('used for hiding name');

// export a class
class Employee {
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
const log = (employee) => {
  console.log(employee.name);
};

// export a constant
const defaultRaise = 0.03;

// export an object - class instance
const modelEmployee = new Employee('Scott');

export { Employee as Emp, log as logEmpName, defaultRaise as raiseAmt, modelEmployee as Scott };
