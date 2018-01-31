/* eslint-disable no-console */

import { getOrder, getUser, getCompany } from './AdvancedPromises';

describe('Advanced Promises Tests', () => {
  it('should chain sequentially using then', (done) => {
    getOrder(3)
      .then(order => getUser(order.userId))
      .then(user => getCompany(user.companyId))
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
});
