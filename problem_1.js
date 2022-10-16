const employeesList = [
    {
        name: 'Kate',
        role: 'Manager',
        salary: 1200,
        holidaysLeft: 27,
        isOnHoliday: true
    },
    {
        name: 'Manu',
        role: 'Head of junior developers',
        salary: 375000,
        holidaysLeft: 20,
        isOnHoliday: false
    },
    {
        name: 'Stephany',
        role: 'Secretary',
        salary: 1000,
        holidaysLeft: 27,
        isOnHoliday: false
    },
    {
        name: 'Mihai',
        role: 'CEO',
        salary: 20000000,
        holidaysLeft: 15,
        isOnHoliday: true
    }
]

const specialCharacters = ['.', '!', '?', '-', '_', '"', "'"];

const createEmployee = (name, role, salary, holidaysLeft) => {

    if (typeof name !== 'string') {
        console.error(`Name: ${name} is not a string`);
        return false;
    } if (name.length <= 3) {
        console.error(`Name: ${name} only has ${name.length} characters`)
    }

    for (character of name) {
        if (specialCharacters.includes(character)) {
            console.error(`Name: ${name} has the special character: ${character}`)
        }
    }

    /* for (character of name) {
         for (sC of specialCharacters) {
             if (character === sC) {
                 console.error(`Name: ${name} has the special character: ${character}`)
             }
         }
     }*/

    // return false; // where does this go? 
    // or here??

    /* for (character of name) {
         if (character === ".") {
             console.error(`Name: ${name} has the special character: ${character}`);
         } if (character === '!') {
             console.error(`Name: ${name} has the special character: ${character}`);
         } if (character === '?') {
             console.error(`Name: ${name} has the special character: ${character}`);
         } if (character === '-') {
             console.error(`Name: ${name} has the special character: ${character}`);
         } if (character === '_') {
             console.error(`Name: ${name} has the special character: ${character}`);
         } if (character === '"') {
             console.error(`Name: ${name} has the special character: ${character}`);
         } if (character === "'") {
             console.error(`Name: ${name} has the special character: ${character}`);
         }
     }
     */

}

createEmployee("gou-.")

// const myCharacters = ['a', 'b'];
// const myString = 'abcdef';
// for (myCharacter of myString) {
//console.log(myCharacters.includes(myCharacter)); }