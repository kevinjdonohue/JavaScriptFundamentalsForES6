/* eslint-disable no-console, no-restricted-syntax */

export function* range(startValue, endValue) {
  for (let i = startValue; i <= endValue; i += 1) {
    // console.log(`i: ${i}`);
    yield i;
  }
}

export function* filter(items, predicate) {
  for (const item of items) {
    // console.log('filter', item);
    if (predicate(item)) {
      yield item;
    }
  }
}

export function* take(items, number) {
  let count = 0;
  if (number < 1) {
    return;
  }
  for (const item of items) {
    yield item;
    count += 1;
    if (count >= number) {
      return;
    }
  }
}
