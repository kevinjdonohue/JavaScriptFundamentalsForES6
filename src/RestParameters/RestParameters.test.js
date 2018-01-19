import sum from './RestParameters';

describe('Rest Parameters Tests', () => {
  it('should take in a variable number of arguments and return the correct result', () => {
    // act
    const result = sum(1, 2, 3);

    // assert
    result.should.equal(6, 'because 1 plus 2 plus 3 is 6');
  });

  it('should take in an array via the spread operator and return the correct result', () => {
    // arrange
    const numbers = [1, 2, 3, 5, 8, 13, 20];

    // act
    const result = sum(...numbers);

    // assert
    result.should.equal(52);
  });
});
