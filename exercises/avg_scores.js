"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
let williesScores = [93, 98, 94, 95, 99, 100, 100];

function getAverage(scores) {
  let sumOfAllScores = 0;
  for (const score of scores) {
    sumOfAllScores = sumOfAllScores + score; //sumOfAllScores += score;
  }

  let averageScore = sumOfAllScores / scores.length;
  return averageScore;
}

let myAverageScore = getAverage(myScores);
console.log(myAverageScore.toFixed(2));

let yourAverageScore = getAverage(yourScores);
console.log(yourAverageScore.toFixed(2));

let williesAverageScore = getAverage(williesScores);
console.log(williesAverageScore);



// let list = [92, 98, 84, 76, 89, 99, 100];
// for (let position = 0; position < list.length; position++) {
//   const item = list[position];
//   //   console.log(item);
//   //do job
// }

// for (const item of list) {
//   console.log(item);
// }

// let cats = ["Garfield", "Tom", "Toma", "Mochi", "Felix", "Flex", "Sylvester", "P Kitty"];

// for (let cat of cats) {
//   console.log(cat);
// }

// for (let index = 0; index < cats.length; index++) {
//   const cat = cats[index];
//   console.log(cat);

// }
