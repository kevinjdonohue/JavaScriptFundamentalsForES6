export default function sum(...numbers) {
  let total = 0;
  numbers.forEach((item) => {
    total += item;
  });

  return total;
}
