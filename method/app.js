// 메소드 === 함수 && 함수 !== 메소드
// const myMath = {
//   PI: 3.141592,
//   square: function(num) {
//     return num * num;
//   },
//   cube: function(num) {
//     return num ** 3;
//   }
// }

// 속기법
const myMath = {
  PI: 3.141592,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  }
}

