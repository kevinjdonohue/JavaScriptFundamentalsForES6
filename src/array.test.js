describe('Array Tests', () => {
  let fruits = [];

  beforeEach(() => {
    fruits = ['Apple', 'Banana', 'Pear'];
  });

  it('should emit the length of an array', () => {
    // assert
    fruits.should.have.length(3, 'because we have 3 items in the array');
  });

  it('should loop over the array', () => {
    // arrange
    const copyOfFruits = [];
    const indexes = [];

    // act
    fruits.forEach((item, index) => {
      copyOfFruits.push(item);
      indexes.push(index);
    });

    // assert
    copyOfFruits.should.have.length(3, 'because it is a copy of the fruits array');
  });

  it('should add an item to the front of the array', () => {
    // arrange
    const expectedFruits = ['Orange', ...fruits];

    // act
    const newLength = fruits.unshift('Orange');

    // assert
    fruits.should.have.length(4, 'because we added 1 item to the front of the 3 item array');
    fruits.should.have.ordered.members(expectedFruits);
    newLength.should.equal(4, 'because we added an item');
  });

  it('should add an item to the end of the array', () => {
    // arrange
    const expectedFruits = [...fruits, 'Orange'];

    // act
    const newLength = fruits.push('Orange');

    // assert
    fruits.should.have.length(4, 'because we added 1 item to the end of the 3 item array');
    fruits.should.have.ordered.members(expectedFruits);
    newLength.should.equal(4, 'because we added an item');
  });

  it('should remove an item from the end of the array', () => {
    // arrange
    const expectedFruits = ['Apple', 'Banana'];
    const expectedLastFruit = 'Pear';

    // act
    const actualLastFruit = fruits.pop();

    // assert
    fruits.should.have.length(2, 'because we removed 1 item from the end of the 3 item array');
    fruits.should.have.ordered.members(expectedFruits);
    actualLastFruit.should.equal(expectedLastFruit);
  });

  it('should remove an item from the beginning of the array', () => {
    // arrange
    const expectedFruits = ['Banana', 'Pear'];
    const expectedFirstFruit = 'Apple';

    // act
    const actualFirstFruit = fruits.shift();

    // assert
    fruits.should.have.length(2, 'because we removed 1 item from the front of the 3 item array');
    fruits.should.have.ordered.members(expectedFruits);
    actualFirstFruit.should.equal(expectedFirstFruit);
  });

  it('should return the index of an item from the array', () => {
    // act
    const bananaIndex = fruits.indexOf('Banana');

    // assert
    bananaIndex.should.equal(1, 'because Banana is the second item in the array');
  });

  it('should remove an item based on its index position in the array', () => {
    // arrange
    const appleIndex = fruits.indexOf('Apple');
    const expectedFruits = ['Banana', 'Pear'];

    // act
    fruits.splice(appleIndex, 1);

    // assert
    fruits.should.have.length(2, 'because we removed an item from the 3 item array');
    fruits.should.have.ordered.members(expectedFruits);
  });

  it('should make a copy of the array', () => {
    // act
    const copyOfFruits = fruits.slice();

    // assert
    copyOfFruits.should.have.ordered.members(fruits);
  });

  it('should make an array of characters from a string', () => {
    // arrange
    const input = 'foo';
    const expectedFooArray = ['f', 'o', 'o'];

    // act
    const actualFooArray = Array.from(input);

    // assert
    actualFooArray.should.have.length(3, 'because we passed in "foo"');
    actualFooArray.should.have.ordered.members(expectedFooArray);
  });

  it('should create a string out of an array', () => {
    // arrange
    const input = ['f', 'o', 'o'];
    const expectedWordFromArray = 'foo';

    // act
    const actualWordFromArray = input.join('');

    // asssert
    actualWordFromArray.should.equal(expectedWordFromArray);
  });

  it('should create a string with separators out of an array', () => {
    // arrange
    const input = ['f', 'o', 'o'];
    const expectedWordFromArray = 'f,o,o';

    // act
    const actualWordFromArray = input.toString();

    // asssert
    actualWordFromArray.should.equal(expectedWordFromArray);
  });

  it('should reverse the order fo the array', () => {
    // arrange
    const expectedReversedFruits = ['Orange', 'Pear', 'Banana', 'Apple'];
    fruits.push('Orange');

    // act
    const reversedFruits = fruits.reverse();

    // assert
    reversedFruits.should.have.length(4, 'because we did not add or remove any items from the 3 item array');
    reversedFruits.should.have.ordered.members(expectedReversedFruits);
  });

  it('should sort the array in alphabetical order', () => {
    // arrange
    const unorderedArray = ['Delta', 'Bravo', 'Charlie', 'Alpha'];
    const expectedSortedArray = ['Alpha', 'Bravo', 'Charlie', 'Delta'];

    // act
    const actualSortedArray = unorderedArray.sort();

    // assert
    actualSortedArray.should.have.length(4, 'because we did not add or remove items from the array');
    actualSortedArray.should.have.ordered.members(expectedSortedArray);
  });

  it('should return a combined array', () => {
    // arrange
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const expectedCombinedArray = ['a', 'b', 'c', 'd', 'e', 'f'];

    // act
    const actualCombinedArray = array1.concat(array2);

    // assert
    actualCombinedArray.should.have.length(6, 'because it is the combination of two three element arrays');
    actualCombinedArray.should.have.ordered.members(expectedCombinedArray);
  });

  /* eslint-disable no-unused-expressions */

  it('should return whether the array contains an item', () => {
    // act
    const includesPear = fruits.includes('Pear');

    // assert
    includesPear.should.be.true;
  });

  it('should return an iterator for the given array', () => {
    // arrange
    const iterator = fruits.entries();
    const expectedFirstValue = [0, 'Apple'];
    const expectedSecondValue = [1, 'Banana'];
    const expectedThirdValue = [2, 'Pear'];

    // act
    const actualFirstValue = iterator.next().value;
    const actualSecondValue = iterator.next().value;
    const actualThirdValue = iterator.next().value;

    // assert
    actualFirstValue.should.have.members(expectedFirstValue);
    actualSecondValue.should.have.members(expectedSecondValue);
    actualThirdValue.should.have.members(expectedThirdValue);
  });

  it('should return true if all items in the array pass the test', () => {
    // arrange
    const allTrue = [true, true, true];
    const allFalse = [false, false, false];
    const trueAndFalse = [true, true, false];
    const currentValueIsTrue = currentValue => currentValue === true;
    const currentValueIsFalse = currentValue => currentValue === false;

    // act
    const actualAllTrue = allTrue.every(currentValueIsTrue);
    const actualAllFalse = allFalse.every(currentValueIsFalse);
    const actualTrueAndFalse = trueAndFalse.every(currentValueIsTrue);

    // assert
    actualAllTrue.should.be.true;
    actualAllFalse.should.be.true;
    actualTrueAndFalse.should.be.false;
  });

  it('should return a new array with the qualifying elements', () => {
    // arrange
    const names = ['Aaron', 'Adam', 'Andy', 'Alan', 'Brady', 'Charlie', 'Duke', 'Elliott'];
    const nameStartsWithA = name => name.split('')[0] === 'A';
    const nameIsFourLetters = name => name.length === 5;

    // act
    const namesThatStartWithA = names.filter(nameStartsWithA);
    const namesThatAreFourLetters = names.filter(nameIsFourLetters);

    // assert
    namesThatStartWithA.should.have.length(4, 'because four names start with A');
    namesThatAreFourLetters.should.have.length(2, 'because there are two names that are five letters');
  });

  it('should return the first item that qualifies', () => {
    // arrange
    const numbers = [1, 2, 3, 5, 8, 13, 20, 40, 100];
    const reversedNumbers = [100, 40, 20, 13, 8, 5, 3, 2, 1];
    const numberIsGreaterThan10 = number => number > 10;
    const numberIsGreaterThan100 = number => number > 100;

    // act
    const numberLargerThanTen = numbers.find(numberIsGreaterThan10);
    const anotherNumberLargerThanTen = reversedNumbers.find(numberIsGreaterThan10);
    const numberIsLargerThanOneHundred = numbers.find(numberIsGreaterThan100);

    // assert
    numberLargerThanTen.should.equal(13, 'because 13 is the first value greater than 10');
    anotherNumberLargerThanTen.should.equal(100, 'because 100 is the first value greater than 10');
    expect(numberIsLargerThanOneHundred).to.equal(undefined);
  });

  it('should return the index of the first item that qualifies', () => {
    // arrange
    const numbers = [1, 2, 3, 5, 8, 13, 20, 40, 100];
    const reversedNumbers = [100, 40, 20, 13, 8, 5, 3, 2, 1];
    const numberIsGreaterThan10 = number => number > 10;
    const numberIsGreaterThan100 = number => number > 100;

    // act
    const greaterThan10Index = numbers.findIndex(numberIsGreaterThan10);
    const anotherGreaterThan10Index = reversedNumbers.findIndex(numberIsGreaterThan10);
    const greaterThan100Index = numbers.findIndex(numberIsGreaterThan100);

    // assert
    greaterThan10Index.should.equal(5, 'because 13 is the 5th element in the array');
    anotherGreaterThan10Index.should.equal(0, 'because 100 is the 1st element in the array');
    greaterThan100Index.should.equal(-1, 'because there are no numbers in the array > 100');
  });
});
