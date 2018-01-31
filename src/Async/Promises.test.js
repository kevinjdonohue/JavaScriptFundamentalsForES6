/* eslint-disable no-console */

describe('Promises Tests', () => {
  it('should execute the callback given to then', (done) => {
    // arrange
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Success!');
      }, 250);
    });

    // act
    promise.then(() => {
      done();
    });
  });

  it('should receive the resolved data', (done) => {
    // arrange
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 250);
    });

    // act & assert
    promise.then((data) => {
      data.should.equal(1);
      done();
    });
  });

  it('should fail when rejected', (done) => {
    // arrange
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(Error('oh noes!'));
      }, 250);
    });

    // act & assert
    promise.then(() => {}).catch((error) => {
      error.message.should.equal('oh noes!');
      done();
    });
  });

  it('should compose when resolved with a promise', (done) => {
    const promise = new Promise((resolve) => {
      resolve(3);
    });

    const anotherPromise = new Promise((resolve) => {
      resolve(promise);
    });

    anotherPromise.then((data) => {
      data.should.equal(3);
      done();
    });
  });

  it('should have a static resolve', (done) => {
    const promise = Promise.resolve(3);

    const anotherPromise = Promise.resolve(promise);

    anotherPromise.then((data) => {
      data.should.equal(3);
      done();
    });
  });

  it('should have a static reject', (done) => {
    const promise = Promise.reject(Error('oh noes!'));

    promise.catch((error) => {
      error.message.should.equal('oh noes!');
      done();
    });
  });

  it('should be asynchronous', (done) => {
    let async = false;

    const promise = new Promise((resolve) => {
      resolve();
    });

    promise.then(() => {
      async.should.equal(true);
      done();
    });

    async = true;
  });
});
