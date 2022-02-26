// let totalEggs = 0;
// function collectEggs() {
//   totalEggs = 6;
//   console.log(totalEggs);
// }

// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = 'Scalet Macaw';
// function birdWatch() {
//   let bird = 'Great Blue Heron';
//   console.log(bird);
// }

// console.log(bird);

// let radius = 8;
// if (radius > 0) {
//   const PI = 3.141592;
//   let msg = 'HIII!';
// }

// console.log(radius);
// console.log(PI);

// 블록 범위 ***
// for (let i = 0; i < 5; i++) {
//   let msg = 'SDAFDSAFDSAF';
//   console.log(msg);
// }
  // var를 사용하면 변수의 범위가 함수로 지정되지만 블럭으로 지정되지 않음.
// console.log(msg); // 그래서 출력
// console.log(i);   // 그래서 출력

// 함수 내의 함수를 사용할 줄 알아야 한다.
// 렉시컬 범위 ***
function bankRobbery() {
  const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman'];
  function cryForHelp() {
    function inner() {
      for (let hero of heroes) {
        console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
      }
    }
    inner();
  }
  cryForHelp();
}