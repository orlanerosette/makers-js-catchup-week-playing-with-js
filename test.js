const isValidLength = (phoneNumber) => {
  const validLength = 10;
  if (phoneNumber.length == validLength) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// isValidLength('00');
// isValidLength('0011223344');



const uppercaseMessage = (message) => {
  return message.toUpperCase();
}

// This function accepts as arguments a string message, and a function.
// It then calls the given function to do its job.
const transform = (message, transformFunction) => {
  return transformFunction(message);
}

// console.log(transform("hello", uppercaseMessage));

const lowercaseMessage = (message) => {
  return message.toLowerCase();
}

// console.log(transform("WHY ARE YOU SHOUTING?", lowercaseMessage));


const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (number) => {
  return `Text sent to: ${number}`;
}

const notify = (address, notifyFunction) => {
  return notifyFunction(address);
}

// console.log(notify('hello@makers.tech.test', notifyByEmail));
// console.log(notify('+10000000000', notifyByText));

const printHello = () => {
  console.log("Hello");
}

setTimeout(printHello, 3000);

const executeAfterDelay = (time, executedFunc) => {
  setTimeout(executedFunc, time);
}

// executeAfterDelay(5, printHello);

const addToBatch = (array, number) => {
  if (array.length >= 5) {
    console.log(array);
  } else {
    console.log(array.concat(number));
  }
}

// addToBatch([1], 3);
// addToBatch([1, 2, 3], 4);
// addToBatch([], 8); 
// addToBatch([1, 2, 3, 4, 5, 6], 7); 
addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); 