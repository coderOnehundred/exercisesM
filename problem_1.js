const employeesList = [
  {
    name: "Kate",
    role: "Manager",
    salary: 1200,
    holidaysLeft: 27,
    isOnHoliday: true,
  },
  {
    name: "Manu",
    role: "Head of junior developers",
    salary: 375000,
    holidaysLeft: 20,
    isOnHoliday: false,
  },
  {
    name: "Stephany",
    role: "Secretary",
    salary: 1000,
    holidaysLeft: 27,
    isOnHoliday: false,
  },
  {
    name: "Mihai",
    role: "CEO",
    salary: 20000000,
    holidaysLeft: 15,
    isOnHoliday: true,
  },
];

const specialCharacters = [".", "!", "?", "-", "_", '"', "'"];

const createEmployee = (name, role, salary, holidaysLeft) => {
  // check for string in name

  if (typeof name !== "string") {
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

  if (typeof role !== "string") {
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

  if (typeof salary !== "number") {
    console.error(`Salary: ${salary} is not a number`);
    return false;
  }

  if (!(salary >= 100)) {
    // I know I can spear me the trouble but I wanted to touch on this point
    console.error(`Salary: ${salary} is below minimum wage`);
    return false;
  }

  // Check if holidaysLeft

  if (typeof holidaysLeft !== "number") {
    if (holidaysLeft === undefined) {
      holidaysLeft = 5;
    }
  }
  if (typeof holidaysLeft !== "number" && holidaysLeft !== undefined) {
    console.error(`Holidays Left: ${holidaysLeft} is not a number`);
    // return false
  }

  employeesList.push({ name, role, salary, holidaysLeft });

  console.log(name, role, salary, holidaysLeft);

  console.log(employeesList);
};

createEmployee("Willie", "President president", 100, 25);
createEmployee("Joma", "Vice President", 110, 25);

// console.log(employeesList);

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

function removeEmployee(employeesList, name) {
  // start a counter at 0 ; go trough every element, check if the name of the element is the one I'm passing as the parameter; when found splice
  // if employee not found log error and return false;

  let foundIndex = -1;
  let currentIndex = 0;

  for (let employee of employeesList) {
    if (employee.name === name) {
      foundIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
  }

  if (foundIndex === -1) {
    console.error(`Employee: ${name} is not found`);
    return false;
  }
  employeesList.splice(foundIndex, 1);
  // return employeesList;

  //   findIndex(criteriaFunction) {
  //     let foundIndex = -1;
  //     let currentIndex = 0;
  //     for (let element of list) { // It knows about list because you do list.findIndex
  //         if (criteriaFunction(element)) {
  //             foundIndex = currentIndex;
  //             return foundIndex;
  //         }
  //         currentIndex = currentIndex + 1;
  //     }
  // }

  // (obj) => obj.name === name
  /*
      obj => obj.name === name

      obj => {
        return obj.name === name
      }

      function someFunc (obj) {
        return obj.name === name
      }

  */

  // const objWithIdIndex = employeesList.findIndex((obj) => obj.name === name);
  // employeesList.splice(objWithIdIndex, 1);
  // return employeesList;
}
removeEmployee(employeesList, "Kate");

function changeRole(employeesList, employeeName, newRole) {
  // check for newRole

  if (typeof newRole !== "string") {
    console.error(`newRole: ${newRole} is not a string`);
    return false;
  }

  if (newRole.length <= 3) {
    console.error(`Role: '${newRole}' only has ${newRole.length} characters`);
    return false;
  }

  let foundSpecialCharacterInRole = false;

  for (character of newRole) {
    if (specialCharacters.includes(character)) {
      console.error(`Role: ${newRole} has the special character: ${character}`);
      foundSpecialCharacterInRole = true;
    }
  }

  if (foundSpecialCharacterInRole) {
    return false;
  }

  //

  let foundIndex = -1;
  let currentIndex = 0;

  for (let employee of employeesList) {
    if (employee.name === employeeName) {
      foundIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
  }
  if (foundIndex === -1) {
    console.error(`Employee: ${employeeName} is not found`);
    return false;
  }

  employeesList[foundIndex].role = newRole;
}

// [ { id: 1, name: 'John' }, { id: 3, name: 'Peter' } ]
console.log("|||||||||||||||||");
// employeesList[1].role = "new name";
changeRole(employeesList, "Mihai", "no");
console.log(employeesList);

// do the checks in role also for new role
