// default params

// function rollDie(numSides) {
//   if(numSides === undefined) {
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// }

// default 값을 지정
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

// default 값은 뒤에 가야한다.
function greet(person, say='Hello', punc='!') {
  return `${say}, ${person}${punc}`;
}

// 함수 호출 시 스프레드 구문
const nums = [12, 13, 12, 11, 10, 9, 1, 1321421];
Math.max(12, 13, 12, 11, 10, 9, 1, 1321421)
Math.max(nums) // NaN
Math.max(...nums) // ...을 붙이면 1 번째의 함수와 같습니다.
Math.min(...nums)
console.log(...nums) //뜨긴 하는데 이상하게 뜸

// 행렬 리터럴 스프레드 구문
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];
const allPets = [...cats, ...dogs];

// 객체 스프레드 구문
const feline = { legs: 4, family: 'Feliae' };
console.log({...feline});
const canine = { isFurry: true, family: 'Caninae' };
console.log({...feline, ...canine});

// 어떻게 사용되는가?
const dataFromForm = {
  email: 'blueman@gmail.com',
  password: 'tobia123!',
  username: 'tfunke'
}

// dataFromForm에 추가하는 방법
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }

// 인수 객체
function sum() {
  console.log(arguments)
}

// forEach, map, filter, reduce, setTimeout, setInterval, some, every 기억할 것,,,

function sum(...nums) { // 인수를 몇 개로 해도 됨.
  return nums.reduce((total, el) => total + el);
} 

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
} 