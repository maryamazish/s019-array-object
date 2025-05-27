const company = {
  name: "TechCorp",
  departments: {
    dev: { employees: 15, budget: 100000 },
    hr: { employees: 3, budget: 50000 },
  },
};

// a) Access the HR budget
// b) Add new department 'marketing' with .employees = 5
// c) Calculate total employees using Object.values()

const values = Object.values(company);
console.log(values);

const keys1 = Object.keys(company);
const keys2 = Object.keys(company.departments);
console.log(keys1);
console.log(keys2);

const entries = Object.entries(company);
console.log(entries);


//محاسبه میانگین سن افراد دو رو درش
const people1 = {
  ali: 23,
  jay: 31,
  reza: 32,
};

//روش1
let sumAge = 0;
const ages = Object.values(people1);
ages.forEach((age) => {
  sumAge = sumAge + age;
});
console.log(sumAge / ages.length);

//روش1
let sumAge1 = ages.reduce((acc, cur) => {
  console.log(acc);
  console.log(cur);
  return acc + cur;
}, 0);
console.log(sumAge1 / ages.length);

//محاسبه اینکه تو اسم کوچکم چندتا کارکتر دارم
const myCharName = (input) => {
  const str = input.split("");
  console.log(str);
  return str;
};
console.log(myCharName("Maryam").length);


//----نام و تعداد کراکترهای هر اسم را بصورت یک آبجکت خروجی دهد
const peopleAsString = "Shakiba,Pedram,Maryam";
const myarr = peopleAsString.split(",");
console.log(myarr);

const arr1 = myarr.map((person) => {
  return [person.toLowerCase(), person.length];
});

const myObj = Object.fromEntries(arr1);
console.log(myObj);

//فرم کوتاه شده کد بالا
const myObj1 = Object.fromEntries(
  peopleAsString.split(",").map((person) => {
    return [person.toLowerCase(), person.length];
  })
);
console.log(myObj1);


const students = [
  {
    name: "Alice",
    courses: {
      math: 18,
      english: 14,
      history: 12,
    },
  },
  {
    name: "Bob",
    courses: {
      math: 10,
      chemistry: 16,
      physics: 19,
    },
  },
  {
    name: "Charlie",
    courses: {
      biology: 13,
      english: 17,
      math: 15,
    },
  },
  {
    name: "Diana",
    courses: {
      art: 20,
      music: 18,
      english: 16,
    },
  },
  {
    name: "Ethan",
    courses: {
      geography: 11,
      history: 14,
      math: 9,
    },
  },
];

const studentHasCourse = (personName, courseName) => {
  const findStudent = students.find((student) => {
    return student.name === personName;
  });
  if (!findStudent) {
    return false;
  }
  let courses = Object.keys(findStudent.courses || {});
  return courses.some((course) => {
    return course === courseName;
  });
};

console.log(studentHasCourse("Ethan", "music"));
console.log(studentHasCourse("Ethan", "math"));
console.log(studentHasCourse("Diana", "english"));



let aliceAvg = 0;
let res = students.forEach((person) => {
  if (person.name === "Alice") {
    let values = Object.values(person.courses);
    aliceAvg =
      values.reduce((acc, cur) => {
        return acc + cur;
      }, 0) / values.length;
  }
});
console.log(aliceAvg);
