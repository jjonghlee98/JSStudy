const exams1 = [80, 98, 92 , 78, 77, 90, 89, 84, 81, 77];
const exams2 = [80, 98, 92 , 78, 70, 90, 89, 84, 81, 77];

exams1.every(score => score >= 75); // true
exams2.every(score => score >= 75); // false

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

movies.some(score => score.year > 2015); // false
movies.some(score => score.year >= 1986); // true
