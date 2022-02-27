// 메서드에 있는 객체를 가리킬 때 -> this

const cat = {
  name: 'Blue Steele',
  color: 'grey',
  breed: 'scottish fold',
  meow() {
    console.log(`${this.name} says MEOWWWWW!`);
  }
}

const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg() {
    eggCount = this.eggCount + 1;
    return 'EGG';
  }
  
}

// hen.name;
// hen.eggCount;
// hen.layAnEgg();
// hen.layAnEgg();
// hen.eggCount;