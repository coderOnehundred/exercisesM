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

// this is what we want to see
// 1 a
// 2 b
// 3

// this is not what we wanna see
// 1 a
// 2 b
// 3 undefined
// Run with: { arrayOne: [1, 2, 3], arrayTwo: ['a', 'b'] } , { arrayOne: ["test 1", "test 2", "test 3"], arrayTwo: [1, 2, 3, 4, 5] }

/* THIS IS NONSENSE
let exampleObject = {
    arrayOne: [1, 2, 3],
    arrayTwo: ['a', 'b']
}

function exercise4(theObject) {
    for(){

    }
}
*/

/*
Create a function called exercise5
The function will receive one argument. The argument will be a list of lists. Using for, log every element in evey array.
For example, with input [[1, 2, 3], ['a', 'b', 'c'], [7, 8, 9]] I expect to see

1 2 3 a b c 7 8 9
Run with the example.
*/

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

console.log(flatten([[1, 2, 3], ['a', 'b', 'c'], [7, 8, 9]]))






