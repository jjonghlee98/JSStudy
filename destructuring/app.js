// array destructuring - 배열 분해
const scores = [982934, 242342,155135, 987089, 351531, 312312];

const highScore = scores[0];
const secondScore = scores[1];

// const [gold, silver, bronze] = scores;
const [gold, silver, bronze, ...everyoneElse] = scores;

// object desctructuring - 객체 분해
const user = {
  email: 'bluemoon@gmail.com',
  password: 'sCoTt1948sMiTh',
  firstName: 'Blue',
  lastName: 'Moon',
  born: 1930,
  died: 1978,
  bio: 'Blue Moon Milk was an American politician and the first openly',
  city: 'San Frnacisco',
  state: 'California'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const { email } = user;
// const { email, password, ...everything } = user;

// 새 이름 짓기 ':'
// const { born: birthYear, died: deathYear } = user;

const user2 = {
  name: 'jonghwan',
  city: 'paju',
  age: 25,
  state: 'unjeong',
  hobby: 'coding'
}


const { city, state, died='N/A' } = user2;

// param destructuring - 매개 변수 분해

// function fullName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// 구조 분해
// function fullName(user) {
//   const { firstName, lastName} = user;
//   return `${firstName} ${lastName}`;
// }

function fullName({firstName, lastName}) {
  return `${firstName} ${lastName}`;
}




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
  }
]

// movies.filter((movie) => movie.score > 90);

// 구조 분해
movies.filter(({ score }) => score >= 90);

// movies.map(movie => {
//   return `${movie.title} (${movie.year}) is read ${movie.score}`;
// })

// 구조 분해
movies.map(({ title, score, year }) => {
  return `${title} (${year}) is read ${score}`;
})