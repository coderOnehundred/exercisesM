/*
Write a function called exercise1
In the function, define a constant that is an array, with numbers 1 through 5. Write both a for of loop and a for loop that iterates over that array and logs each element
*/

// I made this and arrow function just for practice (not to forget how to arrow function);

const exercise1 = () => {
    const arrayOfNumbers = [1, 2, 3, 4, 5];
    console.log(arrayOfNumbers.length, "hey");
    for (let i of arrayOfNumbers) {
        console.log(i)
    }
    console.log('>>>>>>')
    for (let i = 0; i < arrayOfNumbers.length; i = i + 1) {
        console.log(arrayOfNumbers[i])
        // this is enlightening... 
    }
}

// exercise1()

/*
Write a function called exercise2
In the function, define two constants. One constanta is an array with elements 1 through 5. The other constant is a function, that takes one argument and returns that argument times 2.

Write both a for of loop and a regular for loop that iterates over the array you defined and calls the function you defined with each element.
*/

function exercise2() {
    const arrayOfNumbers2 = [1, 2, 3, 4, 5]
    const timesTwoFunction = (duplicateMe) => {
        return duplicateMe * 2;
    }
    for (i of arrayOfNumbers2) {
        console.log(timesTwoFunction(i))

    }
    console.log('||||||||||||||||||||');
    for (let i = 0; i < arrayOfNumbers2.length; i = i + 1) {
        console.log(timesTwoFunction(arrayOfNumbers2[i]));
    }

}

// exercise2()


/*
Write a function called exercise3
The function will receive two arguments, the first is an array and the second is a function.
 Write both a for of loop and a for loop that goes over the argument array,
  and calls the argument function
   with each element of the array. 
   It then logs the return value of calling the
  argument function with the element.

Outside exercise 3 define a function called argFunc that takes an argument and returns that argument multiplied by 3.

Call exercise3 with [1, 3, 16, 71, 5] and argFunc
*/

function exercise3(array, func) {
    for (i of array) {
        func(i)
        console.log(func(i))
        // I did it? wtf
    }
}

function argFunc(x) {
    return x * 3;
}

exercise3([1, 3, 16, 71, 5], argFunc);



















