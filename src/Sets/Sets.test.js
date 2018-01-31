/* eslint-disable no-console */

describe('Set Tests', () => {
  let arrayOfNumbers;
  let arrayOfNames;

  beforeEach(() => {
    arrayOfNumbers = [1, 2, 3, 5, 8, 13, 20, 40, 100];
    arrayOfNames = ['Kevin', 'Kim', 'Chris', 'Kate'];
  });

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

  it('ADD - should only add an object once; prevent duplicates', () => {
    // arrange
    const set = new Set();
    const kevin = 'This is an error message.';
    const kevin2 = 'This is another error message.';
    const kevin3 = 'This is an error message.';

    // act
    set.add(kevin);
    set.add(kevin2);
    set.add(kevin3);

    // assert
    set.size.should.equal(2);
  });

  it('CLEAR - should remove all of the elements from the set', () => {
    // arrange
    const set = new Set(arrayOfNumbers);

    // act
    set.size.should.equal(9);
    set.clear();

    // assert
    set.size.should.equal(0);
  });

  it('DELETE - should delete a given value from the set', () => {
    // arrange
    const set = new Set(arrayOfNumbers);

    // act
    const removedOneHundred = set.delete(100);
    const didntRemoveFour = set.delete(4);

    // assert
    removedOneHundred.should.equal(true);
    didntRemoveFour.should.equal(false);
  });

  it('ENTRIES - should return first value from set by calling .next().value', () => {
    // arrange
    const set = new Set(arrayOfNames);
    const expectedFirstValue = ['Kevin', 'Kevin'];

    // act
    const entries = set.entries();
    const firstValue = entries.next().value;

    // assert
    firstValue.should.have.members(expectedFirstValue);
  });

  it('FOREACH - should add each item in the Map to an array', () => {
    // arrange
    const set = new Set(arrayOfNames);

    // act
    const namesFromMap = [];
    set.forEach((value) => {
      namesFromMap.push(value);
    });

    // assert
    namesFromMap.length.should.equal(4);
    namesFromMap[0].should.equal('Kevin');
  });

  // it('FOR OF - should iterate through the Set', () => {
  //   // arrange
  //   const names = ['Kevin', 'Kim', 'Chris', 'Kate'];
  //   const set = new Set(names);

  //   // act
  //   for (const item of set) {
  //     console.log('item:', item);
  //   }
  // });

  it('HAS - should determine whether an item is present in the set', () => {
    // arrange & act
    const set = new Set(arrayOfNumbers);

    // assert
    set.has(100).should.equal(true);
  });

  it('VALUES/KEYS - should return an iterator that contains the values for each element in the Set', () => {
    // arrange
    const set = new Set(arrayOfNumbers);

    // act
    const keys = set.keys();
    const firstKey = keys.next().value;
    const values = set.values();
    const firstValue = values.next().value;

    // assert
    firstKey.should.equal(1);
    firstValue.should.equal(1);
  });
});
