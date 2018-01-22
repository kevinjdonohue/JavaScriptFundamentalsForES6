import Employee from './Classes';

describe('Employee Tests', () => {
  it('getName should return name', () => {
    // arrange
    const testEmployee = new Employee('fred', 'developer');

    // act
    const name = testEmployee.getName();

    // assert
    name.should.equal('fred');
  });

  it('getTitle should return title', () => {
    // arrange
    const testEmployee = new Employee('fred', 'developer');

    // act
    const title = testEmployee.getTitle();

    // assert
    title.should.equal('developer');
  });

  it('getters should retrieve name and title', () => {
    // arrange
    const testEmployee = new Employee('ginger', 'tester');

    // act
    const { name, title } = testEmployee;

    // assert
    name.should.equal('ginger');
    title.should.equal('tester');
  });

  it('setter should assign a new name and title', () => {
    // arrange
    const testEmployee = new Employee('bill', 'manager');

    // act
    testEmployee.name = 'ethan';
    testEmployee.title = 'designer';

    // assert
    const { name, title } = testEmployee;
    name.should.equal('ethan');
    title.should.equal('designer');
  });

  it('doWork should return paid', () => {
    // arrange
    const testEmployee = new Employee('scott', 'developer');

    // act
    const work = testEmployee.doWork();

    // assert
    work.should.equal('paid');
  });
});
