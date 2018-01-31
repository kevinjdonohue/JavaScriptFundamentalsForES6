/* eslint-disable no-console */

describe('Maps Tests', () => {
  it('SIZE & SET - should add two keys and value to the map', () => {
    // arrange
    const map = new Map();

    // act
    map.set(1, 'Kevin');
    map.set(2, 'Larry');

    // assert
    map.size.should.equal(2);
  });

  it('ClEAR - should remove all of the key value pairs from the map', () => {
    // arrange
    const map = new Map();
    map.set('Developer', 'Kevin');
    map.set('Manager', 'Larry');

    // act
    map.size.should.equal(2);
    map.clear();

    // assert
    map.size.should.equal(0);
  });

  it('DELETE - should return true, if it exists, and remove it from the map', () => {
    // arrange
    const map = new Map();
    map.set('Developer', 'Kevin');
    map.set('Manager', 'Larry');

    // act
    map.size.should.equal(2);
    const removedDeveloper = map.delete('Developer');
    const removedPO = map.delete('ProductOwner');

    // assert
    map.size.should.equal(1);
    removedDeveloper.should.equal(true);
    removedPO.should.equal(false);
  });

  it('ENTRIES - should return an interator', () => {
    // arrange
    const map = new Map();
    const expectedKey1 = 'Developer';
    const expectedPerson1 = { firstName: 'Kevin', lastName: 'Donohue' };
    map.set(expectedKey1, expectedPerson1);
    const expectedKey2 = 'Manager';
    const expectedPerson2 = '';
    map.set(expectedKey2, expectedPerson2);

    // act
    const entries = map.entries();
    const firstValue = entries.next().value;
    const secondValue = entries.next().value;
    const thirdValue = entries.next().value;

    // assert
    firstValue[0].should.equal(expectedKey1);
    firstValue[1].should.equal(expectedPerson1);

    secondValue[0].should.equal(expectedKey2);
    secondValue[1].should.equal(expectedPerson2);

    expect(thirdValue).to.equal(undefined); // goofy workaround for Chai Should syntax against an undefined value
  });

  // TODO:  forEach
  it('FOREACH - should add each item in the Map to an array', () => {
    // arrange
    const map = new Map();
    map.set(1, 'Kevin');
    map.set(2, 'Larry');

    // act
    const arrayOfValues = [];
    map.forEach((value) => {
      arrayOfValues.push(value);
    });

    // assert
    arrayOfValues.length.should.equal(2);
    arrayOfValues[0].should.equal('Kevin');
    arrayOfValues[1].should.equal('Larry');
  });

  // it('FOR OF - should iterate through the Set', () => {
  //   // arrange
  //   const map = new Map();
  //   map.set(1, 'Kevin');
  //   map.set(2, 'Larry');

  //   // act
  //   // for (const item of map) {
  //   //   console.log(item);
  //   // }
  //   for (const [key, value] of map) {
  //     console.log(key);
  //     console.log(value);
  //   }
  // });

  it('GET - should retrieve a value via its key', () => {
    // arrange
    const map = new Map();
    map.set(1, 'Kevin');
    map.set(2, 'Larry');
    const expectedValue = 'Larry';

    // act
    const actualValue = map.get(2);

    // assert
    actualValue.should.equal(expectedValue);
  });

  it('HAS - should return a boolean indicating whether or it was found', () => {
    // arrange
    const map = new Map();
    map.set(1, 'Kevin');
    map.set(2, 'Kim');
    map.set(3, 'Kate');
    map.set(4, 'Chris');

    // act
    let kateExists = map.has(3);
    kateExists.should.equal(true);

    // assert
    map.delete(3);
    kateExists = map.has(3);
    kateExists.should.equal(false);
  });
});
