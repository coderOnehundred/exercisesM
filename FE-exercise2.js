const array = [
    {
        innerArray: [1, 2, 3],
        innerFunc: x => console.log(x + 1),
    },
    {
        innerArray: [1, 2, 3],
        innerFunc: x => console.log(x + x),
    }, {
        innerArray: [1, 2, 3],
        innerFunc: x => console.log(3 * x),
    }
];
// index, item, array
const forEachArgumentFunction = (arrayObject) => {
    const innerArray = arrayObject.innerArray;
    const innerFunc = arrayObject.innerFunc;

    innerArray.forEach(innerFunc);

}

array.forEach(forEachArgumentFunction);