// try - catch 
// 오류가 없을 때 문제없이 출력
try {
  console.log('hello'.toUpperCase());
} catch {
  console.log('ERROR!!!');
}

// 오류가 있을 때 ERROR!!! 출력;
// try {
//   console.log(hello.toUpperCase());
// } catch {
//   console.log('ERROR!!!');
// }

function yell(msg) {
  try{
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(e);
    console.log('Please pass a string next time!');
  }
}