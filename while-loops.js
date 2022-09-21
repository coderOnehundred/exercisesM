function exercise1() {
    while (true) {
        console.log('Test');
    }
}

function exercise2() {
    while ('abc') { console.log('Test'); }
}


const magic = () => Math.floor(Math.random() * 100);

function exercise3() {
    let randomNumber = magic();
    while (randomNumber) {
        console.log('Test', randomNumber);
        randomNumber = magic();
    }
    console.log(randomNumber);
}

// exercise3()

// function exercise3() {
//     randomNumber = 3 // magic();
//     if (randomNumber) {
//         console.log('Test', randomNumber);
//         randomNumber = 0 // magic();
//     }
//     console.log(randomNumber);
// }



// let someVariable = 1


// someVariable = 2;


// someVariable = 3;

/*

for (i = 1; i < 4; i = i + 0) {
    console.log('test', i);
    i = i + 1;
}

add the beginning i is set to the value 1

we check if I is strickly less than 4. 1 is strickly less than 4/ true 
we execute the body of the function. we console.log('test', 1), after we increment i by 1. now the value of i is 2 
we execute the third step of the for loop. Which is increment i by 0. The value of i is 2

we check if I is strickly less than 4. 2 is strickly less than 4/ true 
we execute the body of the function. We console.log('test', 2), after we increment i by 1. now the value of io is 3.
We execute the third step of the for loop. Which is incremnt i by 0. The value of i is 3.

we check if I is strickly less than 4. 3 is strickly less than 4/ true
we execute the body of the function. We console.log('test', 3), after we increment i by 1. now the value of i is 4.
we execute the third step of the for loop. Whis is increment i by 0. The value of i is 4. 

we check if I is strickly less than 4. 4 is stricly less than 4/ false
we don't execute the body of the function 

*/

/*
In whileLoops.js create a function called exercise4
The function takes one argument. Write a while loop whose condition is the argument and whose body logs "Hello".
Run the function with the following arguments: true, false, "test", '', null, []

What do you observe?


*/

function exercise4(a) {
    while (a) {
        console.log('Hello');
    }
}

// exercise4(true);

/*
In whileLoops.js create a function called exercise5
The function receives one argument. In the function, assign the argument to a let variable. Write a while loop whose condition is the variable you made and in the body, log the variable and decrement the variable by one.
Run the function with the following arguments: 10, 3, -1

What do you observe?
*/

function exercise5(b) {
    let testVar = b;
    while (testVar) {
        console.log(testVar)
        testVar = testVar - 1;
    }
}

/*
In whileLoops.js create a function called exercise6
The function receives one argument. You can assume the argument to be an array. Write a while loop that logs every element in the array.
Run the function with the following arguments: [1, 2, 3], ["a", "b", "c", "d"]
*/

// I need to go from 0 to the length of array 

function exercise6(x) {
    let i = 0;
    while (i !== x.length) {
        console.log(x[i])
        i = i + 1
    }
}

// exercise6([1, 2, 3]);

function exercise7(x) {
    let i = x.length - 1;
    while (i !== -1) {
        console.log(x[i])
        i = i - 1
    }
}

// exercise6([1, 2, 3]);

function exercise8(x) {
    let i = 0;
    while (i !== x.length) {
        console.log(x[i])
        i = i + 2
    }
}

// exercise9(["a", "b", "c", "d"]);

function exercise9(x, y) {
    // until y 
    let i = 0;
    while (i !== y) {
        console.log(x[i])
        i = i + 1
    }

}


// exercise9(['a', 'b', 'c', 'd', 'e'], 3);

// Exersis 10: ['a', 'b', 'c', 'd', 'e'], 3 - logs 'a' and 'd'
// Exersis 10: ['a', 'b', 'c', 'd', 'e'], 2 - logs 'a' and 'c' and 'e'
// Exersis 10: ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2 - logs 'a', 'c', 'e', 'g'
// Exersis 10: ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 4 - logs 'a', 'e'

function exercise10(x, y) {
    let i = 0;
    while (i < x.length) {
        console.log(x[i])
        i = i + y;
    }
}

exercise10(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2);
