/* eslint-disable no-param-reassign, no-console */

const unicorn = {
  legs: 4,
  color: 'brown',
  horn: true,
};

const proxyUnicorn = new Proxy(unicorn, {
  get: (target, property) => {
    if (property === 'color') {
      return `awesome ${target[property]}`;
    }

    return target[property];
  },
  set: (target, property, value) => {
    if (property === 'horn' && value === false) {
      // throw Error('A unicorn cannot ever lose its horn!');
      // console.log('A unicorn cannot ever lose its horn!');
      return true;
    }

    target[property] = value;
    return true;
  },
});

describe('Proxies Tests', () => {
  it('should let you intercept gets', () => {
    // arrange

    proxyUnicorn.legs.should.equal(4);
    proxyUnicorn.horn.should.equal(true);
    proxyUnicorn.color.should.equal('awesome brown'); // proxy value
  });

  it('should let you intercept sets', () => {
    // act
    proxyUnicorn.legs = 5;
    proxyUnicorn.color = 'white';
    proxyUnicorn.horn = false;

    // assert
    proxyUnicorn.legs.should.equal(5);
    proxyUnicorn.color.should.equal('awesome white');
    proxyUnicorn.horn.should.equal(true); // disallowing the set to occur but returning true to avoid error
  });
});
