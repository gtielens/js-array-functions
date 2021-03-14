const items = [
  { name: 'Audi', type: 'A3', price: 28500 },
  { name: 'BWM', type: '3', price: 42500 },
  { name: 'Volvo', type: 'XC60', price: 52000 },
  { name: 'BWM', type: '5', price: 50500 },
  { name: 'Peugeot', type: '308', price: 24000 },
  { name: 'Audi', type: 'A5', price: 69000 },
  { name: 'BWM', type: 'X1', price: 43500 },
  { name: 'Volvo', type: 'S60', price: 44000 },
  { name: 'Peugeot', type: '508', price: 35500 },
];

console.log(`items`, items);

/* SLICE to work on copy of array */
console.log(
  `Sorted on price ASC`,
  items.slice().sort((a, b) => {
    if (a.price < b.price) return -1;
    else if (a.price > b.price) return 1;
    else return 0;
  })
);

/* FOREACH loops over array without returning anything */
items.forEach((item) => console.log(`item.type`, item.type));

let cutOffPrice = 50000;

/* SOME returns true/false */
const hasExepensiveItems = items.some((item) => item.price >= cutOffPrice);
console.log(`hasExepensiveItems >= ${cutOffPrice}`, hasExepensiveItems);
/* EVERY checks condition on all elements of array are met */
console.log(
  `No free cars`,
  items.every((item) => item.price > 0)
);

/* FILTER by condition */
let filteredItems = items.filter((item) => {
  return item.price <= cutOffPrice;
});
console.log(`filteredItems price <= ${cutOffPrice}`, filteredItems);

/* MAP convert an array to new (sub) array */
const namesArray = items.map((item) => item.name);
console.log(`namesArray`, namesArray);

/* FIND an item in an array */
let searchFor = 'Volvo';
const foundItem = items.find((item) => (item.name = searchFor));
console.log(`foundItem ${searchFor}`, foundItem);

/* REDUCE runs function on every single item in the array */
const totalPrice = items.reduce((curTotal, item) => {
  return item.price + curTotal;
}, 0);
console.log(`totalPrice`, totalPrice);

/* INCLUDES checks if something is present in array */
numberItems = [1, 2, 3, 5, 7, 11];
console.log(`includes`, numberItems.includes(3));
