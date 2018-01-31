describe('WeakSet Tests', () => {
  let kevin;
  let kim;

  beforeEach(() => {
    kevin = { id: 1, firstName: 'Kevin', lastName: 'Donohue' };
    kim = { id: 2, firstName: 'Kim', lastName: 'Donohue' };
  });

  it('ADD & HAS - should contain one item when one item is added', () => {
    // arrange
    const weakSet = new WeakSet();
    const item = { name: 'some name' };

    // act
    weakSet.add(item);
    weakSet.add(item);
    weakSet.add(item);

    // assert
    weakSet.has(item).should.equal(true);
  });

  it('ADD & HAS - should only add an object once; prevent duplicates', () => {
    // arrange
    const weakSet = new WeakSet();
    const errorMessage1 = { message: 'This is an error message.' };
    const errorMessage2 = { message: 'This is another error message.' };

    // act
    weakSet.add(errorMessage1);
    weakSet.add(errorMessage1);
    weakSet.add(errorMessage2);

    // assert
    weakSet.has(errorMessage1).should.equal(true);
    weakSet.has(errorMessage2).should.equal(true);
  });

  it('DELETE & HAS - should delete a given value from the set', () => {
    // arrange
    const weakSet = new WeakSet();
    weakSet.add(kevin);
    weakSet.add(kim);
    weakSet.has(kevin).should.equal(true);
    weakSet.has(kim).should.equal(true);

    // act
    weakSet.delete(kevin);
    weakSet.delete(kim);

    // assert
    weakSet.has(kevin).should.equal(false);
    weakSet.has(kim).should.equal(false);
  });
});
