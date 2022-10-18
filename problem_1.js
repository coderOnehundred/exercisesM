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


    // check for string in name 

    if (typeof name !== 'string') {
        console.error(`Name: ${name} is not a string`);
        return false;
    }

    if (name.length <= 3) {
        console.error(`Name: ${name} only has ${name.length} characters`);
        return false;
    }

    /*
Go through every character of name. If you encounter a special character, log an erorr using the format we discussed. After going through all characters of name, if it has any special characters, return false
*/

    // Check for Character 

    let foundSpecialCharacter = false;


    for (character of name) {
        if (specialCharacters.includes(character)) {
            console.error(`Name: ${name} has the special character: ${character}`);
            foundSpecialCharacter = true;
        }
    }
    if (foundSpecialCharacter) {
        return false;
    }

    // Check in role

    if (typeof role !== 'string') {
        console.error(`Role: ${role} is not a string`);
        return false;
    }

    if (role.length <= 3) {
        console.error(`Role: ${role} only has ${role.length} characters`);
        return false;
    }

    let foundSpecialCharacterInRole = false;


    for (character of role) {
        if (specialCharacters.includes(character)) {
            console.error(`Role: ${role} has the special character: ${character}`);
            foundSpecialCharacterInRole = true;
        }
    }

    if (foundSpecialCharacterInRole) {
        return false;
    }

    // Check if number.

    if (typeof salary !== 'number') {
        console.error(
            `Salary: ${salary} is not a number`
        )
        return false;
    }

    if (!(salary >= 100)) { // I know I can spear me the trouble but I wanted to touch on this point 
        console.error(`Salary: ${salary} is below minimum wage`);
        return false
    }

    // Check if holidaysLeft

    if (typeof holidaysLeft !== 'number') {
        if (holidaysLeft === undefined) {
            holidaysLeft = 5;
        }
    }
    if (typeof holidaysLeft !== 'number' && holidaysLeft !== undefined) {
        console.error(`Holidays Left: ${holidaysLeft} is not a number`)
        // return false
    }


    employeesList.push({ name, role, salary, holidaysLeft })

    console.log(name, role, salary, holidaysLeft);

    console.log(employeesList)



}

console.log(createEmployee('Willie', "President", 100, 25))


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

