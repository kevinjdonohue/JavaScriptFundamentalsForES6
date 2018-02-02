/* eslint-disable no-param-reassign, no-console */
describe('Object Tests', () => {
  describe('is function', () => {
    it('should consider positive and negative zero to be different', () => {
      // arrange
      const zero = 0;
      const negativeZero = -0;

      // assert
      expect(zero === negativeZero).to.equal(true); // odd behavior from ===
      expect(Object.is(0, -0)).to.equal(false);
    });

    it('should consider NaN to be NaN', () => {
      // arrange
      const notANumber = NaN;
      const anotherNotANumber = NaN;

      // assert
      expect(notANumber === anotherNotANumber).to.equal(false); // odd behavior from ===
      expect(Object.is(notANumber, anotherNotANumber)).to.equal(true);
    });
  });

  describe('assign function', () => {
    it('should apply mixins to objects', () => {
      // arrange
      const shark = {
        hurt(target) {
          target.hurt = true;
        },
      };

      const laser = {
        zap(target) {
          target.zapped = true;
        },
      };

      const person = {};

      // act
      Object.assign(shark, laser);

      shark.hurt(person);
      shark.zap(person);

      // assert
      person.hurt.should.equal(true);
      person.zapped.should.equal(true);
    });
  });

  describe('Shorthands', () => {
    it('should create properties from local variables', () => {
      // arrange
      const firstName = 'Kevin';
      const lastName = 'Donohue';

      const Person = {
        firstName,
        lastName,
      };

      // assert
      Person.firstName.should.equal('Kevin');
      Person.lastName.should.equal('Donohue');
    });

    it('should create methods using shorthand', () => {
      // arrange
      const server = {
        getPort() {
          return 8000;
        },
      };

      // assert
      server.getPort().should.equal(8000);
    });

    it('should support variables for property names', () => {
      // arrange
      function createSimpleObject(propName, propValue) {
        return { [propName]: propValue };
      }

      const obj = createSimpleObject('color', 'red');

      // assert
      obj.color.should.equal('red');
    });
  });
});
