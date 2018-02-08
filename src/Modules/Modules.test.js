import { Emp as Employee, Scott as modelEmployee, logEmpName as log, raiseAmt as defaultRaise } from './Modules';
// import * as Employees from './Modules';

describe('Module Tests', () => {
  it('should execute doWork', () => {
    // arrange
    const name = 'Kevin';
    const emp = new Employee(name);

    // act
    const message = emp.doWork();

    // assert
    message.should.equal(`${name} is working`);
  });

  it('should retrieve name', () => {
    // arrange
    const emp = new Employee('Scott');

    // act
    const firstName = emp.name;

    // assert
    firstName.should.equal('Scott');
  });

  it("should execute Scott's doWork", () => {
    // act
    const message = modelEmployee.doWork();

    // assert
    message.should.equal('Scott is working');
  });

  it('should log an employee name', () => {
    // act
    log(modelEmployee);
  });

  it('should find default raise', () => {
    // arrange
    const expectedRaiseAmount = 0.03;
    const actualRaiseAmount = defaultRaise;

    // assert
    actualRaiseAmount.should.equal(expectedRaiseAmount);
  });
});
