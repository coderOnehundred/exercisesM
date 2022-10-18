const foundOdd = (array) => {

    let isOdd = false;

    for (element of array) {
        if (element % 2 !== 0) {
            isOdd = true;
            console.log(element, 'odd number');
        }
    }
    return isOdd
}


console.log(foundOdd([3, 7]));