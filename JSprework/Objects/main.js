let person = {
  name: 'Ursula',
  age: 27,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
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
