"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Sour Patch Kids", price: 6.82 },
  { product: "Skittles", price: 4.79 },
];

// Which candies costs less than $4.00?
console.log("--------candies less than $4.00-----");
//easy/quick solution
for (const product of products) {
  if (product.price < 4) {
    console.log(product);
  }
}

console.log("------------------------------------");

//using a function, more reusable
// function getCheapCandies(candies, price) {
//   let cheapCandies = [];

//   for (const candy of candies) {
//     if (candy.price <= price) {
//       cheapCandies.push(candy);
//     }
//   }

//   return cheapCandies;
// }

// let cheapCandies = getCheapCandies(products, 3);
// console.log(cheapCandies);

// Which candies has "M&M" in its name?
console.log("--------M&M candies-----");
for (const product of products) {
  if (product.product.includes("M&M")) {
    console.log(product);
  }
}
console.log("------------------------------------");

// Do we carry "Swedish Fish"?
console.log('--------"Swedish Fish"?-----');

for (const product of products) {
  if (product.product.includes("Swedish Fish")) {
    console.log("Yes we carry Swedish Fish, would you like to try some?");
  }
}
console.log("------------------------------------");
