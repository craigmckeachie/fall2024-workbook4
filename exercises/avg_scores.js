"use strict";
//arrays
//functions, calling functions, passing parameters, catch return value in variable

//for loop
// operators to the summing
//

let list = [92, 98, 84, 76, 89, 99, 100];
// let yourScores = [82, 98, 94, 88, 92, 100, 100];

for (let position = 0; position < list.length; position++) {
  const item = list[position];
  //   console.log(item);
  //do job
}

for (const item of list) {
  console.log(item);
}

let cats = ["Garfield", "Tom", "Toma", "Mochi", "Felix", "Flex", "Sylvester", "P Kitty"];

for (let cat of cats) {
  console.log(cat);
}

for (let index = 0; index < cats.length; index++) {
  const cat = cats[index];
  console.log(cat);
  
}
