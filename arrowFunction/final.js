const movies = [
  {
    title: 'Stand By me',
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

// const newMovies = movies.map(function(movie) {
//   return `Title: ${movie.title} - ${movie.score / 10}`;
// })

// const newMovies = movies.map((movies) =>  {
//   return `${movies.title} - ${movies.score / 10}`;
// })

const newMovies = movies.map((movies) => (
  `${movies.title} - ${movies.score}`
))