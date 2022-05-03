const checkLength = (number) => {
  if (number.length <= 10) {
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = (array) => {
  return array.filter(checkLength);
}

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

// console.log(filterLongNumbers(numbers));

// console.log(filterLongNumbers(['4763687363', '7867867862']));
// console.log(filterLongNumbers([]));

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// const namesAndDiscounts = [
//   { name: 'Anna', discount: 50 },
//   { name: 'Laura', discount: 40 },
//   { name: 'Josh', discount: 30 },
//   { name: 'Min', discount: 50 },
//   { name: 'Karla',discount:  6 }
// ];

// const generateMessage = (name) => {
//   return (`Hi ${name}! 50% off our best dried mangoes for you today!`);
// }

// const generateMessages = (names) => {
//   return names.map(generateMessage);
// }

// console.log(generateMessages(names));

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla',discount: 60 }
];

const generatePersonalisedMessage = (person) => {
  return (`Hi ${person.name}! ${person.discount}% off our best dried mangoes for you today!`);
}

const generatePersonalisedMessages = (namesAndDiscounts) => {
  return namesAndDiscounts.map(generatePersonalisedMessage);
}

console.log(generatePersonalisedMessages(namesAndDiscounts));
