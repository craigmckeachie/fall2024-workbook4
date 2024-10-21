"use strict";

let contact = {
  name: "James Bond",
  address: "125 Rue Way",
  city: "New York",
  state: "New York",
  zip: 10035,
};

// function printLabel(contact) {
//   console.log(contact.name);
//   console.log(contact.address);
//   console.log(contact.city + ",", contact.state, contact.zip);
//   console.log(contact.city + ", " + contact.state + " " + contact.zip);
// }

function printLabel(contact) {
  let mailingLabel = ` 
   ${contact.name}
   ${contact.address}
   ${contact.city}, ${contact.state} ${contact.zip}
  `;
  console.log(mailingLabel);
}

printLabel(contact);
