// import { Employee, modelEmployee, log, defaultRaise } from './Modules';
import * as Employees from './Modules';

describe('Module Tests', () => {
  it('should execute doWork', () => {
    // arrange
    const name = 'Kevin';
    const emp = new Employees.Employee(name);

    // act
    const message = emp.doWork();

    // assert
    message.should.equal(`${name} is working`);
  });

  it('should retrieve name', () => {
    // arrange
    const emp = new Employees.Employee('Scott');

    // act
    const firstName = emp.name;

    // assert
    firstName.should.equal('Scot');
  });

  it("should execute Scott's doWork", () => {
    // act
    const message = Employees.modelEmployee.doWork();

    // assert
    message.should.equal('Scott is working');
  });

  it('should log an employee name', () => {
    // act
    Employees.log(Employees.modelEmployee);
  });

  it('should find default raise', () => {
    // arrange
    const expectedRaiseAmount = 0.03;
    const actualRaiseAmount = Employees.defaultRaise;

    // assert
    actualRaiseAmount.should.equal(expectedRaiseAmount);
  });
});
