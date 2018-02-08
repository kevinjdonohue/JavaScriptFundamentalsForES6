import Supervisor from './DefaultModule';

describe('Default Module Tests', () => {
  it('should be able to use a default module', () => {
    // arrange
    const theBoss = new Supervisor('Larry');

    // act
    const message = theBoss.superviseWork();

    // assert
    message.should.equal('Larry is supervising work');
  });
});
