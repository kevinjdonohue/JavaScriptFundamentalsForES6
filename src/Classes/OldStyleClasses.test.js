import Employee from './OldStyleClasses';
// old school version of "class" -- a function with a function added to its prototype

describe('Old Style Classes Tests', () => {
  it('should return message', () => {
    // arrange
    const testEmployee = new Employee('employee');

    // act
    const result = testEmployee.info();

    // arrange
    result.should.equal('employee');
  });
});
