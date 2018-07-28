let person = {
  name: 'Ursula',
  age: 27,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () =>{return 'Hello, there!'},
  sayGoodbye() {return 'Goodbye!'}
}

let day = 'Saturday';

let alarm;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
  }

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);

person.hobbies = ['Sewing','Painting']
person.hobbies = ['Cycling']
console.log(person['hobbies'])
console.log(person.sayHello())
