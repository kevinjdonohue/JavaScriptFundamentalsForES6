/* eslint-disable no-param-reassign, no-console */

const unicorn = {
  legs: 4,
  color: 'brown',
  horn: true,
  hornAttack: target => `${target.name} was obliterated!`,
};

// function proxy
unicorn.hornAttack = new Proxy(unicorn.hornAttack, {
  apply: (target, context, args) => {
    if (context !== unicorn) {
      return 'nobody can use unicorn horn but the unicorn';
    }

    return target.apply(context, args);
  },
});

const thief = { name: 'Rupert' };
thief.attack = unicorn.hornAttack;

// object proxy
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

  it('unicorn should (still) be able to use hornAttack', () => {
    // act
    const result = unicorn.hornAttack(thief);

    // assert
    result.should.equal('Rupert was obliterated!');
  });

  it('thief should not be able to use hornAttack because of the function proxy', () => {
    // act
    const result = thief.attack(thief);

    // assert
    result.should.equal('nobody can use unicorn horn but the unicorn');
  });
});
