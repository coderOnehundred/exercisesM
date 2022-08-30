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

}

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

exercise4(1, 2);












