// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Enter the secret code.");

// while (guess !== SECRET) {
//   guess = prompt("Enter the secret code.");
// }
// alert("CONGRATS YOU GOT THE SECRET!!!");
// console.log("CONGRATS YOU GOT THE SECRET!!!");

// let input = prompt("Hey, say something!");

// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop copying me") {
//     break;
//   }
// }

// console.log("OK YOU WIN!");

// for (let i = 0; i <= 1000; i++) {
//   console.log(i);
//   if (i === 100) break;
// }

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too High. Enter a new guess");
  } else {
    guess = prompt("Too Row. Enter a new guess");
  }
}

if (guess === "q") {
  console.log("Okay. Bye!");
} else {
  console.log(`you got it! It took you ${attempts} guesses`);
}