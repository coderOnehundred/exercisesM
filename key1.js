/*
Write a function that takes as an argument an array. The elements of the array are strings. Iterate over the elements of the array. If an element has length 3, console.log that element. If you encountered any elements of length 3, return true, otherwsie, return false

*/

const arrayOfWords = ["hello", "morning", "hi", "good", "day"]


const lenghtType = (array) => {

    let foundLengthThree = false;

    for (element of array) {

        if (element.length === 3) {
            console.log(element);
            foundLengthThree = true;

        }
    }

    return foundLengthThree;
}

console.log(lenghtType(arrayOfWords));