function grumpus() {
  console.log('One Test');
  console.log('Two Test');
  console.log('Three Test');
}

function singSong() {
  console.log('Do');
  console.log('Re');
  console.log('Mi');
}

function greet(firstName, lastName) {
  console.log(`firstName is: ${firstName} ${lastName[0]}`);
}

function repeat(str, numTimes) {
  for (let i = 0; i < numTimes; i++){ 
    console.log('HI');
  }
}

function repeat(str, numTimes) {
  let result = '';
  for (let i = 0; i < numTimes; i++){ 
    result += str;
  }
  console.log(result);
}

function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return false;
  }
  return x + y;
}

function multiply(firstNum, lastNum) {
  if (typeof firstNum !== 'number' || typeof lastNum !== 'number') {
    return false;
  }
  return firstNum * lastNum;
}

let array = [];
function lastElement(array) {
    if (array.length !== 0) {
      // return array[array.length - 1];
      return array.at(-1); // index를 선택하는 좋은 방법
    }
    return null;
}

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// grumpus();

// lastElement([3, 5, 7]);
// lastElement([1]);
// lastElement([]);

// singSong 함수 여러 번 출력
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

// greet 함수 출력
// greet('George', 'Clooney');