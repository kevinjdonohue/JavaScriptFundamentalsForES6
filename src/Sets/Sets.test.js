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

    // assert
    set.size.should.equal(1);
  });
});
