// 화살표 함수 
// const add = function(x, y) {
//   return x + y;
// }

const add = (x, y) => {
  return x + y;
}


const square = (x) => {
  return x * x;
}

// 괄호가 없어도 동작한다.(매개변수 1개일 때만,,)
const square2 = x => {
  return x * x;
}

// 매개변수가 없어도 기능을 한다.
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
}

// 암시적 반환: return을 제외하는 방법
const rollDie2 = () => (
  Math.floor(Math.random() * 6) + 1
)

// 암시적 반환은 괄호가 없어도 된다.
// const rollDie = () => Math.floor(Math.random() * 6) + 1
const add2 = (x, y) => x + y

// 최종 버전
const isEven = num => num % 2 === 0;