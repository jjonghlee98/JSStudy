// 배열 메소드 --> forEach, map
// map 예제
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const doubles = numbers.map(function(num) {
  return num * 2 ;
})

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

const big = movies.map(function(movie) {
  return movie;
})

const titles = movies.map(function(movie) {
  return movie.title.toUpperCase();
})

const scores = movies.map(function(movie) {
  return movie.score;
})