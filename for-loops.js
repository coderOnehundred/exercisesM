function exercise1() {

    for (let i = 1; i <= 10; i = i + 1) {
        console.log(i);
    }

}

//2:22:43 quincy
// exercise1()


function exercise2(x) {

    for (let i = 0; i !== x.length; i = i + 1) {
        console.log(x[i])
    }

}

// exercise2(['a', 'b', 'c', 'd'])



function exercise3(x) {

    for (let i = x.length - 1; i !== -1; i = i - 1) {
        console.log(x[i])
    }

}

// exercise3(['a', 'b', 'c', 'd'])

// Create a function called exercise4
// The function will receive one argument. This argument will be an object. The object has two keys, arrayOne and arrayTwo. Write a for loop that will log the elements of the two arrays at corresponding positions. Do not log values that do not exist.
// For example, with input { arrayOne: [1, 2, 3], arrayTwo:  } I expect to see:

// function exercise4(objectWithTwoKeys) {
//     for (let i = 0; i < objectWithTwoKeys.length; i = i + 1) {
//         // console.log(arrayOfArrays[i])
//         for (let j = 0; j < objectWithTwoKeys.arrayOne.length; j = j + 1) {
//             // console.log(arrayOfArrays[i][j])
//             console.log(j);
//         }
//         for (let k = 0; k < objectWithTwoKeys.arrayTwo.length; k = k + 1) {
//             // console.log(arrayOfArrays[i][k])
//             console.log(k);
//         }
//     }
// }


function exercise5(arrayOfArrays) {

    for (let i = 0; i < arrayOfArrays.length; i = i + 1) {
        // console.log(arrayOfArrays[i])
        for (let j = 0; j < arrayOfArrays[i].length; j = j + 1) {
            console.log(arrayOfArrays[i][j])
        }
    }
}
// exercise5([[1, 2, 3], ['a', 'b', 'c'], [7, 8, 9]])


function flatten(arrayOfArrays) {

    let flattenArray = []
    for (let i = 0; i < arrayOfArrays.length; i = i + 1) {
        // console.log(arrayOfArrays[i])
        for (let j = 0; j < arrayOfArrays[i].length; j = j + 1) {
            // console.log(arrayOfArrays[i][j])
            flattenArray.push(arrayOfArrays[i][j]);
        }
    }
    return flattenArray;
}

// console.log(flatten([[1, 2, 3], ['a', 'b', 'c'], [7, 8, 9]]))




/*
 I need to access the value associated with the key

 (use dot notation)
 we don't want to see undefined


// Create a function called exercise4
// The function will receive one argument. This argument will be an object. The object has two keys, arrayOne and arrayTwo. 
Write a for loop that will log the elements of the two arrays at corresponding positions. Do not log values that do not exist.

// For example, with input { arrayOne: [1, 2, 3], arrayTwo: ['a', 'b']  } I expect to see: 
1 a 
2 b 
3 undefined


1. Look at both arrays, specificly their length
2. Use the longest length as the length of the for loop
3. Iterate and use the same index for both arrays to get the corresponding element
4. When logging, use some conditional to avoid logging undefined
*/
// a for of is very tight with an array 




function exercise4(objectWithTwoKeys) {

    const arrayOneLength = objectWithTwoKeys.arrayOne.length;
    const arrayTwoLength = objectWithTwoKeys.arrayTwo.length;

    let maxLength


    if (arrayOneLength > arrayTwoLength) {
        maxLength = arrayOneLength
    } else {
        maxLength = arrayTwoLength
    }
    for (let i = 0; i < maxLength; i = i + 1) {
        const arrayOneElement = objectWithTwoKeys.arrayOne[i]
        const arrayTwoElement = objectWithTwoKeys.arrayTwo[i]

        if (arrayOneElement !== undefined && arrayTwoElement !== undefined) {
            console.log(arrayOneElement, arrayTwoElement)
        }
    }


}

exercise4({ arrayOne: [1, 2, 3], arrayTwo: ['a', 'b'] })







