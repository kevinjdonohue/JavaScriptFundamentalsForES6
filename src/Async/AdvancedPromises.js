/* eslint-disable no-console */
class OrderManager {
  static getOrder() {
    // console.log('orderId: ', orderId);
    return Promise.resolve({ userId: 35 });
  }

  static getUser() {
    // console.log('userId: ', userId);
    return Promise.resolve({ companyId: 18 });
  }

  static getCompany() {
    // console.log('companyId: ', companyId);
    return Promise.resolve({ name: 'PluralSight' });
  }

  static getCourse(courseId) {
    const courses = {
      1: { name: 'Introduction to Cobol' },
      2: { name: 'Yet Another C# Course' },
      3: { name: 'How to make billions by blogging' },
    };

    return Promise.resolve(courses[courseId]);
  }
}

export default OrderManager;
