let person = {
  _name: 'Lu Xun',
  _age: 137,

set age(newAge) {
  if (typeof newAge === 'number') {
    this._age = newAge;
  } else {
    return console.log('Invalid input')
  }
}
};

person.age = 39;
