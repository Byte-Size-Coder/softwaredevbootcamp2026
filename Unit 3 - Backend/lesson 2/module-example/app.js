// considered "old way " of importing modules
// called CommonJS
// const students = require("./student");
// const { calculateAverage, checkPass } = require("./grade");

// considered "new way" of importing modules
// called ES Modules
import students from "./student.js";
import { calculateAverage, checkPass } from "./grade.js";

console.log(students);

console.log(students.student1);
console.log(students.student2.fullName);

const grades = [90, 67, 82, 75];

console.log(calculateAverage(grades));
console.log(checkPass(46));
