/* eslint-disable no-console, no-restricted-syntax, no-unused-vars */
import 'babel-polyfill';
import { range, filter, take } from './Generators';
import { Company } from '../Classes/Classes';

describe('Generators Tests', () => {
  it('should return a sum', () => {
    // arrange
    let sum = 0;

    // act
    // const iterator = numbers(1, 4);

    // let next = iterator.next();

    // while (!next.done) {
    //   sum += next.value;
    //   console.log('next');
    //   next = iterator.next();
    // }

    // console.log('next');
    for (const n of range(1, 4)) {
      sum += n;
      // console.log('next');
    }

    // assert
    sum.should.equal(10);
  });

  it('should filter employees', () => {
    // arrange
    let count = 0;
    const company = new Company();
    company.addEmployees('Adam', 'Geoff', 'Borey', 'Kevin');

    // act
    for (const employee of filter(company, e => e[0] === 'K')) {
      count += 1;
    }

    // assert
    count.should.equal(1);
  });

  it('take - should find at least one match', () => {
    // arrange
    let count = 0;
    const company = new Company();
    company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');

    // act
    for (const employee of take(filter(company, e => e[0] === 'T'), 2)) {
      count += 1;
    }

    // assert
    count.should.equal(2);
  });
});
