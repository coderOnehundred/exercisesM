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

function roleTest(role) {
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
  return true;
}

function nameTest(name) {
  // check for string in name

  if (typeof name !== "string") {
    console.error(`Name: ${name} is not a string`);
    return false;
  }

  if (name.length <= 3) {
    console.error(`Name: ${name} only has ${name.length} characters`);
    return false;
  }

  // Check for Character in name

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

  return true;
}

function testSalary(salary) {
  // Check if number.

  if (typeof salary !== "number") {
    console.error(`Salary: ${salary} is not a number`);
    return false;
  }

  if (!(salary >= 100)) {
    console.error(`Salary: ${salary} is below minimum wage`);
    return false;
  }

  return true;
}

function testHolidays(holidaysLeft) {
  // Check if holidaysLeft

  if (typeof holidaysLeft !== "number") {
    if (holidaysLeft === undefined) {
      holidaysLeft = 5;
    }
  }
  if (typeof holidaysLeft !== "number" && holidaysLeft !== undefined) {
    console.error(`Holidays Left: ${holidaysLeft} is not a number`);
    return false;
  }
  return true;
}

function runTests(tests) {
  const results = [];

  for (let test of tests) {
    // const func = test.func;
    // const arg = test.arg;
    const { func, arg } = test;

    const result = func(arg);
    results.push(result);
  }

  for (let result of results) {
    if (!result) {
      return false;
    }
  }
  return true;
}

const createEmployee = (name, role, salary, holidaysLeft) => {
  const tests = [
    {
      arg: role,
      func: roleTest,
    },
    {
      arg: name,
      func: nameTest,
    },
    {
      arg: salary,
      func: testSalary,
    },
    {
      arg: holidaysLeft,
      func: testHolidays,
    },
  ];

  const allTestsResult = runTests(tests);

  if (!allTestsResult) {
    return false;
  }

  employeesList.push({ name, role, salary, holidaysLeft });
};

function removeEmployee(employeesList, name) {
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
}

function changeRole(employeesList, employeeName, newRole) {
  const roleTestResult = roleTest(newRole);

  if (!roleTestResult) {
    return false;
  }

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

function changeSalary(employeesList, employeeName, newSalary) {
  const testSalaryResult = testSalary(newSalary);

  if (!testSalaryResult) {
    return false;
  }

  let foundIndex = -1;
  let currentIndex = 0;

  for (let employee of employeesList) {
    if (employee.name === employeeName) {
      foundIndex = currentIndex;
    }
    currentIndex = currentIndex + 1;
  }

  if (foundIndex === -1) {
    console.error(`The employee's name: ${employeeName} has not been found`);
    return false;
  }

  employeesList[foundIndex].salary = newSalary;
  return true;
}

changeSalary(employeesList, "Manu", 1500000);
console.log(employeesList);
