"use strict";

let jamesBond = {
  name: "James Bond",
  address: "125 Rue Way",
  city: "New York",
  state: "New York",
  zip: 10035,
};
let maryPoppins = {
  name: "Mary Poppins",
  address: "125th Ave",
  city: "Powell",
  state: "Ohio",
  zip: 43065,
};

function printLabel(contact1, contact2) {
  console.log(contact1, contact2);
}

printLabel(maryPoppins, jamesBond);

// function printLabel(contact) {
//   let mailingLabel = `
//        ${contact.name}
//        ${contact.address}
//        ${contact.city}, ${contact.state} ${contact.zip}
//       `;
//   console.log(mailingLabel);
// }

// function printLabel(contact) {
//   console.log(contact.name);
//   console.log(contact.address);
//   console.log(contact.city + ",", contact.state, contact.zip);
//   console.log(contact.city + ", " + contact.state + " " + contact.zip);
// }
