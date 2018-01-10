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

  it('should add an item to the end of the array', () => {
    // arrange
    fruits.push('Orange');

    // assert
    fruits.should.have.length(4, 'because we added 1 item to the 3 item array');
  });
});
