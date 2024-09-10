const students = [
    { name: "John", age: 20 },
    { name: "Jane", age: 22 },
    { name: "Jim", age: 19 }
];
const ages = students.map(student => student.age);
console.log(ages);