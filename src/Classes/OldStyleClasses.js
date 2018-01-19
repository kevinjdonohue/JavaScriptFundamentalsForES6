/* eslint-disable func-names, object-shorthand */
const Employee = function (msg) {
  // "constructor"
  this.message = msg;
};

Employee.prototype = {
  info() {
    return this.message;
  },
};

export default Employee;
