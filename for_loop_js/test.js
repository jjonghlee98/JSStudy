// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let num = 1; num <= 10; num += 1) {
//   console.log("IM IN THE LOOP BODY!!");
//   console.log(num);
// }

// for (let i = 1; i <= 6; i++) {
//   console.log("Da ba dee da ba daa");
// }

// for (let num = 2; num <= 20; num += 2) {
//   console.log(num);
// }

// for (let num = 100; num >= 0; num -= 10) {
//   console.log(num);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//   console.log(i);
//}

// for (let i = 25; i >= 0; i -= 5) {
//   console.log(i);
// }

//INFINITE LOOPS
// for (let i = 20; i >= 0; i++) {
//   console.log(i);
// }

// 정상적인 루프
// for (let i = 20; i >= 0; i--) {
//   console.log(i);
// }

// 배열 + 반복문 예제
// const animals = ["Scooby", "Velma", "Daphne", "shaggy", "Fred"];

// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i].toUpperCase());
// }

// 중첩 반복문
// for (let i = 1; i <= 10; i++) {
//   console.log(`i is: ${i}`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`     j is: ${j}`);
//   }
// }

const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

// for (let i = 0; i < seatingChart.length; i++) {
//   for (let j = 0; j < seatingChart[i].length; j++) {
//     console.log(seatingChart[i][j]);
//   }
// }

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
