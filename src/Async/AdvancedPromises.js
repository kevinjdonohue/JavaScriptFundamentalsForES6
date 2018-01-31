/* eslint-disable no-console */
// class OrderManager {
//   static getOrder() {
//     // console.log('orderId: ', orderId);
//     return Promise.resolve({ userId: 35 });
//   }

//   static getUser() {
//     // console.log('userId: ', userId);
//     return Promise.resolve({ companyId: 18 });
//   }

//   static getCompany() {
//     // console.log('companyId: ', companyId);
//     return Promise.resolve({ name: 'PluralSight' });
//   }
// }

// export default OrderManager;

export function getOrder() {
  // console.log('orderId: ', orderId);
  return Promise.resolve({ userId: 35 });
}

export function getUser() {
  // console.log('userId: ', userId);
  return Promise.resolve({ companyId: 18 });
}

export function getCompany() {
  // console.log('companyId: ', companyId);
  return Promise.resolve({ name: 'PluralSight' });
}
