const exercise1 = () => {

    const verdad = true;

    if (verdad == true) {
        console.log("The variable is true");
    }

}
// exercise1()

const exercise2 = (x) => {
    if (x === true) {
        console.log("The argument is exactly true");
    } else {
        console.log("The argument is not  exactly true");
    }
}

// exercise2(true);
// exercise2(false);
// exercise2(1);
// exercise2('');
// exercise2('test');

const exercise3 = (x) => {



    /*   FIRST SOLUTION

     if (x === true) {
        console.log("The argument is exactly true");
    }
    if (x) {
        console.log("The argument is truthy");
    }
    if (x === false) {
        console.log("The argument is false");
    }
    if (!x) {
        console.log("The argument is falsy");
    }


    -------------

                   SECOND WRONG SOLUTION

       if (x === true) {
        console.log("The argument is exactly true");
    }
    if (x && !x === true) {
        console.log("The argument is truthy");
    }
    if (x === false) {
        console.log("The argument is false");
    }
    if (!x && !x === false) {
        console.log("The argument is falsy");
    }

    */

    if (x === true) {
        console.log("The argument is exactly true");
    }
    if (x && x !== true) {
        console.log("The argument is truthy");
    }
    if (x === false) {
        console.log("The argument is false");
    }
    if (!x && x !== false) {
        console.log("The argument is falsy");
    }
}

exercise3(true) // for false and true gives me two answer
// show me how to youtube download -- 
// I ended up with the solution after a nap (literally) I woke up and I had if
// turns out I did not have it


const exercise4 = (a, b) => {
    if (a % 2 == 0 && b % 2 !== 0) {
        console.log("0 1");
    }
    if (a % 2 !== 0 && b % 2 == 0) {
        console.log("1 0");
    }
    if (a % 2 == 0 && b % 2 == 0) {
        console.log("0 0");
    }
    if (a % 2 !== 0 && b % 2 !== 0) {
        console.log("1 1");
    }

}

// exercise4(10, 5)
// exercise4(12, 6)
// exercise4(3, 3)
// exercise4(9, 8)

/*                                     CONDITIONAL SOLUTION  TO DUPLICATION PROBLEM
const fizzBuzz = (x) => {
    let a;
    if (x % 3 == 0) {
        console.log(x, "Fizz");
    }

   

    if (x % 5 == 0) {
        console.log(x, "Buzz");
    }

     

    if (x % 15 == 0) {
        console.log(x, "FizzBuzz");
    }
    else if (x % 3 !== 0 && x % 5 !== 0 && x % 15 !== 0) { // if none of the previous ifs has run 
        console.log(x);
    }
}    
*/


// We know the let a is falsy at the beginning 
// We know that we want to see if any of the ifs are true
// we know an if its true if its body is executed 

const fizzBuzz = (x) => {

    let a = undefined;

    // || it does not equal itself 

    if (x % 3 == 0) {
        console.log(x, "Fizz");
        a = x;
    }

    if (x % 5 == 0) {
        console.log(x, "Buzz");
        a = x;
    }

    if (x % 15 == 0) {
        console.log(x, "FizzBuzz");
        a = x
    }
    else if (a == undefined) { // if none of the previous ifs has run 
        console.log(x);
    }
}


// fizzBuzz(15)  // fix this 


