// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics','soccer'];

// for (let i = 0; i < subreddits.length; i++) {
//   console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

// for (let subreddit of subreddits) {
//   console.log(`Visit reddit.com/r/${subreddit}`);
// }


// const seatingChart = [
//   ['Kristen', 'Erik', 'Namita'],
//   ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//   ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//   for (let j = 0; j < seatingChart[i].length; j++) {
//     console.log(seatingChart[i][j]);
//   }
// }
// console.log('');

// for (let row of seatingChart) {
//   for (let students of row) {
//     console.log(students);
//   }
// }


// const magicSquare = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8]
// ];

// for (let row of magicSquare) {
//   let sum = 0;
//   for (let num of row) {
//     sum += num;
//   }
//   console.log(`Row of ${row} sums to ${sum}`);
// }

// for (let char of 'hello world') {
//   console.log(char)
// }

// const testScore = {
//   keenan: 80,
//   damon: 67,
//   kim: 89,
//   shawn: 91,
//   marlon: 72,
//   dawyne: 77,
//   nadia: 83,
//   elvira: 97,
//   diedre: 81,
//   vonnie: 60
// }


// for (let person in testScore) {
//   console.log(`${person} scored ${testScore[person]}`);
// }

// let sums = 0;
// for (let person of Object.values(testScore)) {
//   sums += person;
// }
// console.log(`total is ${sums}`);

// let sums = 0;
// let score = Object.values(testScore);
// for (let person of score) {
//   sums += person;
// }
// console.log(`avg is ${sums / score.length}`);