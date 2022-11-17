const evenOrOdd = (x) => {
  if (x % 2 === 0) {
    return "even";
  }
  return "odd";
};

const logParity = (arg) => {
  if (typeof arg !== number) {
    console.error("Input is not a number");
    return false;
  }
  const resultOfEvenOrOdd = evenOrOdd(arg);
  console.log(resultOfEvenOrOdd);
  return true;
};

const logSumParity = (a, b) => {
  const number = typeof 1;
  console.log(number);
  if (typeof a !== number) {
    console.error("Input a is not a number");
    return false;
  }
  if (typeof b !== number) {
    console.error("Input b is not a number");
    return false;
  }
  const resultOfAddition = a + b;
  const parity = evenOrOdd(resultOfAddition);
  //   if (parity === "even") {
  //     console.log("Sum is even");
  //   } else {
  //     console.log("Sum is odd");
  //   }
  console.log(`Sum is ${parity}`);
};

console.log(logSumParity(3, 3));
