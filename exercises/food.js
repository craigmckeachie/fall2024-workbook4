"use strict";

let menuItems = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
  { item: "Tres leches", price: 3.79 },
];

// for (let count = 0; count < menuItems.length; count++) {
//   const menuItem = menuItems[count];
//   console.log(menuItem);
// }

// for (const one of many) {

// }

for (const menuItem of menuItems) {
  console.log(menuItem);
}
