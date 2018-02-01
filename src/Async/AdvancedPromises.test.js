/* eslint-disable no-console */
import OrderManager from './AdvancedPromises';

describe('Advanced Promises Tests', () => {
  it('should chain sequentially using then', (done) => {
    OrderManager.getOrder(3)
      .then(order => OrderManager.getUser(order.userId))
      .then(user => OrderManager.getCompany(user.companyId))
      .then((company) => {
        company.name.should.equal('PluralSight');
        done();
      })
      .catch((error) => {
        // handle error here
        console.log('ERROR MESSAGE: ', error.message);
        done();
      });
  });

  it('should execute after all promises...', (done) => {
    const courseIds = [1, 2, 3];
    const promises = [];

    courseIds.map(courseId => promises.push(OrderManager.getCourse(courseId)));
    Promise.all(promises).then((values) => {
      values.length.should.equal(3);
      // console.log('values', values);
      done();
    });
  });
});
