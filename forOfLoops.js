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
    console.log('SEPARATOR |||||||||||');
    for (let i = 0; i < array.length; i = i + 1) {
        func(array[i])
        console.log(func(array[i]))
    }
}

function argFunc(x) {
    return x * 3;
}

exercise3([1, 3, 16, 71, 5], argFunc);

/*
Write a function called exercise4
The function will receive one argument, an array of objects. The objects are of the form { value: number|string, func: function } - This means the value key will either be a number or a string and the func key will be a function.

Write both a for of loop and a regular for loop that iterates over the argument array, extracts the value and func from the object and calls func with the value. It logs the return value.

For example, if we send this input [{ value: 1, func: x => x + 1 }, { value: 'test', func: x => x.replaceAll('t', 'x') }] we expect to see 2 and xesx

Call your function with an array defined like this. The first 2 objects will have value a number you want. The func for them will be some transformation you want ( add a value, multiply, count the digits, etc ). The next 3 objects will have value a string you want and the func some string method from here: https://www.w3schools.com/js/js_string_methods.asp

{ value: number|string, func: function }
*/

function exercise4(arrayOfObjects) {
    for (i of arrayOfObjects) {

    }
}

exercise4([{ value: 1, func: x => x + 1 }, { value: 'test', func: x => x.replaceAll('t', 'x') }])

















