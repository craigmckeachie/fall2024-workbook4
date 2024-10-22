"use strict";

let menuItems = [
  { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
  { id: 2, item: "Burger", category: "Meal", price: 7.29 },
  { id: 3, item: "Salad", category: "Meal", price: 8.29 },
  { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
  { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

let drinks = [];
// drinks.push("Margharita");
// drinks.push("Water")
// drinks.push("Diet Coke")
// console.log(drinks);

for (const menuItem of menuItems) {
  if (menuItem.category == "Drink") {
    drinks.push(menuItem);
  }
}

console.log(drinks);

