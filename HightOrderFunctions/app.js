// 고차함수
// 블럭 범위, 렉시컬 범위 기억할 것..!
function callTwice(func) {
  func();
  func();
}

function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f()
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie);
callTenTimes(rollDie);


function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function() { // 반환 함수
      console.log('CONGRATS, I AM A GOOD FUNCTION!');
      console.log('YOU WIN A MILLION DOLLARS!');
    }
  } else {
    return function() { // 반환 함수
      alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!');
      alert('STOP TRYING TO CLOSE THIS WINDOW!');
      alert('STOP TRYING TO CLOSE THIS WINDOW!');
      alert('STOP TRYING TO CLOSE THIS WINDOW!');
      alert('STOP TRYING TO CLOSE THIS WINDOW!');
      alert('STOP TRYING TO CLOSE THIS WINDOW!');
    }
  }
}


function makeBetweenFunc(min, max) {
  return function(num) {
    return num >= min && num <= max;
  }
}

const child = makeBetweenFunc(0, 18);
child(9)  // true
child(19) // false


// makeBetweenFunc(50, 100)

// function isBetween(num) {
//   return num >= 50 && num <= 100;
// }
// function isBetween2(num) {
//   return num >= 1 && num <= 10;
// }