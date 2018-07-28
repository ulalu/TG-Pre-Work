let person = {
  _name: 'Lu Xun',
  _age: 137,

set age(newAge) {
  if (typeof newAge === 'number') {
    this._age = newAge;
  } else {
    return console.log('Invalid input')
  }
},
  get age(){
    console.log(`${this._name} is ${this._age} years old.`)
  }

};

person.age = 39;
console.log(person._age)
