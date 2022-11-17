const someFunction = (x) => {
    if (x % 2 === 0) {
        return 'even';
    }
    return 'odd';
}

const logParity(arg) {
    if (typeof arg !== number) {
        console.error('Input is not a number');
        return false;
    }
    const parity = someFunction(arg);
    if (parity === 'even') {
       console.log('Input is even');
    } else {
       console.log('Input is odd');
    }
}

const logSumParity(a, b) {
    if (typeof a !== number) {
        console.error('Input a is not a number');
        return false;
    }
    if (typeof b !== number) {
        console.error('Input b is not a number');
        return false;
    }
    const result = a + b;
    const parity = someFunction(result);
    if (parity === 'even') {
       console.log('Sum is even');
    } else {
       console.log('Sum is odd');
    }
}