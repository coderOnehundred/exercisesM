const myForEach = (array, func) => {
    for (let i = 0; i < array.length; i = i + 1) {
        func(array[i]);
    }
}

const myFunc = (x) => {
    const y = x + 1;
    console.log(y);
}

const secondFunc = (x) => {
    console.log(x * 5);
    console.log(`I'm x: ${x}`)

}

myForEach([3, 7], secondFunc);