describe('Set Tests', () => {
  it('should contain zero items when constructed', () => {
    // arrange & act
    const set = new Set();

    // assert
    set.size.should.equal(0);
  });

  it('ADD - should contain one item when one item is added', () => {
    // arrange
    const set = new Set();

    // act
    set.add('someValue');
    set.add('someValue');
    set.add('someValue');

    // assert
    set.size.should.equal(1);
  });

  // it('ADD - should only add an object once; prevent duplicates', () => {
  //   // arrange
  //   const set = new Set();
  //   const kevin = { firstName: 'kevin', lastName: 'donohue' };
  //   const kevin2 = { firstName: 'kevin', lastName: 'donohue' };

  //   // act
  //   set.add(kevin);
  //   set.add(kevin2);

  //   // assert
  //   set.size.should.equal(1);
  // });

  /* eslint-disable no-console */

  it('HAS - should determine whether an item is present in the set', () => {
    // arrange & act
    const array = [1, 2, 3, 5, 8, 13, 20, 40, 100];
    const set = new Set(array);

    // assert
    set.has(100).should.equal(true);
  });

  it('ENTRIES - should return all of the entries in the set', () => {
    // arrange
    const names = ['Kevin', 'Kim', 'Chris', 'Kate'];
    const set = new Set(names);

    // act
    const entries = set.entries();

    // assert
    entries.size.should.equal(4);
  });
});
