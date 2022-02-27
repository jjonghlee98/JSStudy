const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const odds = nums.filter((n) => {
  return n % 2 === 1;
})

const smallNums = nums.filter((n) => n < 6);

// 방법 1
// const four = nums.filter((n) => {
//   return n === 4;
// })

// 방법 2
// const four = nums.filter(n => {
//   return n === 4;
// })

// 방법 3
const four = nums.filter(n => n === 4);


const movies = [
  {
    title: 'Amadeus',
    score: 99,
    year: 1984
  },
  {
    title: 'Sharknado',
    score: 35,
    year: 2013
  },
  {
    title: '13 Going On 30',
    score: 70,
    year: 2004
  },
  {
    title: 'Stand By Me',
    score: 85,
    year: 1986
  }
]

// const goodMovies = movies.filter(movie => {
//   return movie.score > 80;
// })

const badMovies = movies.filter(movie => movie.score < 70);
const recentMovies = movies.filter(movie => movie.year > 1990);

// filter와 map을 결합 
// const goodMovies = movies.filter(movie => movie.score > 80);
// const recentMovies = goodMovies.map(movie => movie.title);

// const recentMovie = movies.filter(movie => movie.score > 80).map(movie => movie.title);

// 들여쓰기 방법
movies
      .filter(movie => movie.score > 80)
      .map(movie => movie.title);