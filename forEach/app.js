// forEach문 요즘은 for문, for-of가 많이 쓰임.
const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function print(element) {
  console.log(element);
}

// print(number[0]);
// print(number[1]);

// number.forEach(print)

number.forEach(function(el) {
  if (el % 2 === 0) {
    console.log(el);
  }
})

// for (let el of number) {
//   console.log(el);
// }

const movies = [
  {
    title: 'Amadeus',
    score: 99
  },
  {
    title: 'Stand My me',
    score: 85
  },
  {
    title: 'Parasite',
    score: 95
  },
  {
    title: 'Alian',
    score: 90
  }
]

movies.forEach(function(movie) {
  console.log(`Title: ${movie.title} - Score: ${movie.score}`);
})