//تمرین 2: تبدیل به رشته
// خروجی مورد انتظار: ['10', '20', '30']
const numbers = [10, 20, 30];
const convertToStr = numbers.map((num) => {
  return num.toString();
});
console.log(convertToStr);

//تمرین 3: فقط اول حرف بزرگ شود
// خروجی مورد انتظار: ['Ali', 'Reza', 'Sara']
const names = ["ali", "reza", "sara"];
const capitalFirstLetter = names.map((nam) => {
  // return nam.slice(0,1).toUpperCase() + nam.slice(1);
  return nam.charAt(0).toUpperCase() + nam.slice(1);
});
console.log(capitalFirstLetter);

//تمرین 4: استخراج فقط یک ویژگی از آرایه‌ای از آبجکت‌ها
// خروجی مورد انتظار: ['Ali', 'Sara', 'Reza']
const users = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 30 },
  { name: "Reza", age: 28 },
];
const allNames = users.map((user) => {
  return user.name;
});
console.log(allNames);

//تمرین 5: تبدیل تاریخ تولد به سن (فرض کن سال فعلی 2025 است)
// خروجی مورد انتظار:
// [
//   { name: 'Ali', age: 25 },
//   { name: 'Sara', age: 30 }
// ]
const people = [
  { name: "Ali", birthYear: 2000 },
  { name: "Sara", birthYear: 1995 },
];
const newPeople = people.map((person) => {
  return {
    name: person.name,
    age: 2025 - person.birthYear,
  };
});
console.log(newPeople);

const users1 = [
  { id: 1, name: "Ali", age: 22, isActive: true },
  { id: 2, name: "Sara", age: 30, isActive: false },
  { id: 3, name: "Reza", age: 27, isActive: true },
  { id: 4, name: "Niloofar", age: 19, isActive: true },
  { id: 5, name: "Mona", age: 35, isActive: false },
];

const activeUsers1 = users1
  .filter((user) => {
    return user.isActive;
  })
  .map((user) => {
    return user.age;
  })
  .reduce((acc, cur) => {
    return acc + cur;
  }, 0);
console.log(activeUsers1);

const activeUsers = users1.filter((user) => {
  return user.isActive;
});
console.log(activeUsers);

const ageOfActiveUsers = activeUsers.map((user) => {
  return user.age;
});
console.log(ageOfActiveUsers);

const result3 = ageOfActiveUsers.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(result3);

const result4 = activeUsers.find((user) => {
  return user.age > 25;
});
console.log(result4);

const foo = {
  activeUsers: activeUsers,
  totalAge: result3,
  over25User: result4,
};
console.log(foo);

// محاسبه مجموع قیمت کل سبد خرید
const cart = [
  { name: "Laptop", price: 20000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 },
];

console.log(
  cart.reduce((acc, cur) => {
    return acc + cur.price + cur.quantity;
  }, 0)
);

//لیست دانش‌آموزان و معدل‌گیری
const students = [
  { name: "Ali", grades: [18, 19, 20] },
  { name: "Sara", grades: [14, 15, 13] },
  { name: "Reza", grades: [17, 18, 16] },
];

const gradeAvg = students.map((student) => {
  return {
    name: student.name,
    average:
      student.grades.reduce((acc, cur) => {
        return acc + cur;
      }, 0) / student.grades.length,
  };
});
console.log(gradeAvg);

//سیستم صدور فاکتور با تخفیف فقط برای کاربران فعال
const customers = [
  { name: "Ali", total: 100000, isActive: true },
  { name: "Sara", total: 80000, isActive: false },
  { name: "Reza", total: 120000, isActive: true },
];
const discounted = customers
  .filter((customer) => {
    return customer.isActive;
  })
  .map((customer) => {
    return {
      name: customer.name,
      original: customer.total,
      afterDiscount: customer.total * 0.9,
    };
  });
console.log(discounted);

//آماری از پست‌های منتشر شده در وبلاگ
const posts = [
  { id: 1, title: "JS Basics", views: 120, published: true },
  { id: 2, title: "React Intro", views: 300, published: false },
  { id: 3, title: "Advanced JS", views: 450, published: true },
];
const totalViews = posts
  .filter((post) => {
    return post.published;
  })
  .reduce((acc, cur) => {
    return acc + cur.views;
  }, 0);
console.log(totalViews);

//پیدا کردن استاد فعال با بیشترین سابقه
const teachers = [
  { name: "Amini", yearsOfExperience: 10, isActive: true },
  { name: "Karimi", yearsOfExperience: 15, isActive: true },
  { name: "Zarei", yearsOfExperience: 20, isActive: true },
];

const topTeacher = teachers
  .filter((teacher) => {
    return teacher.isActive;
  })
  .reduce((max, teacher) => {
    // return max.yearsOfExperience > teacher.yearsOfExperience ? teacher : max
    console.log(max);
    console.log(teacher);
    if (max.yearsOfExperience < teacher.yearsOfExperience) return teacher;
    else return max;
  });
console.log(topTeacher);

// پیدا کردن کارمند فعال با بیشترین حقوق
const employees = [
  { name: "Ali", salary: 5000, isActive: true },
  { name: "Sara", salary: 7000, isActive: false },
  { name: "Reza", salary: 8000, isActive: true },
  { name: "Mina", salary: 9000, isActive: true },
];

const topEarner = employees
  .filter((employee) => employee.isActive)
  .reduce((max, employee) => {
    return max.salary < employee.salary ? employee : max;
  });
console.log(topEarner);

//پیدا کردن نزدیک‌ترین رویداد آینده
const today = new Date("2025-05-25");
const events = [
  { title: "جلسه با تیم", date: "2025-05-27" },
  { title: "کنفرانس", date: "2025-06-10" },
  { title: "مصاحبه", date: "2025-05-25" },
];
const nextEvent =  events.filter((event1) => {
    return new Date(event1.date) > today
})
.reduce((acc , cur) => {
    return new Date(acc.date) < new Date(cur.date) ?acc : cur;
})
console.log(nextEvent)

//چت: پیدا کردن کاربری که بیشترین پیام ارسال کرده
const messages = [
  { sender: "Ali", content: "سلام" },
  { sender: "Sara", content: "سلام خوبی؟" },
  { sender: "Ali", content: "آره ممنون" },
  { sender: "Ali", content: "یه سوال داشتم" },
  { sender: "Sara", content: "بپرس" }
];



// بازی: رتبه‌بندی بازیکنان براساس امتیاز
const players = [
  { name: "Ali", score: 1200 },
  { name: "Sara", score: 1500 },
  { name: "Reza", score: 1100 }
];



const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const counter = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(counter)