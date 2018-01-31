/* eslint-disable no-console */

describe('WeakMaps Tests', () => {
  it('SET & HAS - should add two keys and values to the weak map', () => {
    // arrange
    const weakMap = new WeakMap();
    const key1 = { id: 1 };
    const key2 = { id: 2 };

    // act
    weakMap.set(key1, 'Kevin');
    weakMap.set(key2, 'Larry');

    // assert
    weakMap.has(key1).should.equal(true);
    weakMap.has(key2).should.equal(true);
  });

  it('DELETE - should remove an item by its key from the weak map', () => {
    // arrange
    const weakMap = new WeakMap();
    const key1 = { title: 'Developer' };
    const key2 = { title: 'Manager' };
    const key3 = { title: 'Product Owner' };
    weakMap.set(key1, 'Kevin');
    weakMap.set(key2, 'Larry');

    // act
    weakMap.has(key1).should.equal(true);
    weakMap.has(key2).should.equal(true);
    weakMap.delete(key1);
    weakMap.delete(key3);

    // assert
    weakMap.has(key1).should.equal(false);
    weakMap.has(key2).should.equal(true);
  });

  it('GET - should retrieve an item by its key from the weak map', () => {
    // arrange
    const weakMap = new WeakMap();
    const key1 = { id: 1 };
    const key2 = { id: 2 };
    weakMap.set(key1, 'Kevin');
    weakMap.set(key2, 'Larry');
    const expectedValue = 'Larry';

    // act
    const actualValue = weakMap.get(key2);

    // assert
    actualValue.should.equal(expectedValue);
  });
});
