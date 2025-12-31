const students = [
  { id: 1, name: "Amit", marks: 78, department: "CSE" },

  { id: 2, name: "Priya", marks: 92, department: "ECE" },

  { id: 3, name: "Rahul", marks: 45, department: "MECH" },

  { id: 4, name: "Sneha", marks: 66, department: "CSE" },

  { id: 5, name: "Kiran", marks: 88, department: "ECE" },
];

const ulelement1 = document.getElementById("list1");
const ulelement2 = document.getElementById("list2");
const ulelement3 = document.getElementById("list3");
const ulelement4 = document.getElementById("list4");
const ulelement5 = document.getElementById("list5");
const ulelement6 = document.getElementById("list6");
const ulelement7 = document.getElementById("list7");
const ulelement8 = document.getElementById("list8");

//list-1
students.forEach((item) => {
  const listitem = document.createElement("li");
  listitem.textContent = item.name;
  ulelement1.appendChild(listitem);
});

//list-2
let studentsAboveSixty = students.filter((student) => student.marks > 60);
studentsAboveSixty.forEach((item) => {
  const listitem = document.createElement("li");
  listitem.textContent = `${item.name}-${item.department}`;
  ulelement2.appendChild(listitem);
});

//list-3
let deptCount = students.reduce((acc, student) => {
  acc[student.department] = (acc[student.department] || 0) + 1;
  return acc;
}, {});
Object.entries(deptCount).forEach(([key, value]) => {
  // console.log(`${key}-${value}`);
  const listitem = document.createElement("li");
  listitem.textContent = `${key}-${value}`;
  ulelement3.appendChild(listitem);
});

//list-4
let highestMarkStudent = students.reduce((prev, curr) =>
  prev.marks > curr.marks ? prev : curr
);
// console.log(highestMarkStudent);
const listitem = document.createElement("li");
listitem.textContent = `${highestMarkStudent.name} - ${highestMarkStudent.marks}`;
ulelement4.appendChild(listitem);

//list-5
students.forEach((student) => {
  const tablerow = document.createElement("tr");
  ulelement5.appendChild(tablerow);
  const tabledata1 = document.createElement("td");
  const tabledata2 = document.createElement("td");
  const tabledata3 = document.createElement("td");
  tabledata1.textContent = student.name;
  tabledata2.textContent = student.marks;
  tabledata3.textContent = student.department;
  tablerow.appendChild(tabledata1);
  tablerow.appendChild(tabledata2);
  tablerow.appendChild(tabledata3);
});

//list-6
let totalMarks = students.reduce((total, curr) => {
  return total + curr.marks;
}, 0);
let result = totalMarks / students.length;
ulelement6.textContent = `The average of scores is ${result}`;

//list-7
let cseStudents = students.filter((student) => student.department == "CSE");
// console.log(cseStudents);
cseStudents.forEach((student) => {
  const listitem = document.createElement("li");
  listitem.textContent = student.name;
  ulelement7.appendChild(listitem);
});

let sortByMarks = [...students].sort((a, b) => b.marks - a.marks);
// console.log(sortByMarks);
sortByMarks.forEach((student) => {
  const listitem = document.createElement("li");
  listitem.textContent = `${student.name} -- ${student.marks}`;
  ulelement8.appendChild(listitem);
});

//list-8
function addStudent() {
  const name = document.getElementById("nameInput").value.trim();
  const marks = parseInt(document.getElementById("marksInput").value);
  const dept = document.getElementById("deptInput").value.trim();

  if (!name || isNaN(marks) || !dept) {
    document.getElementById("message").textContent = "Please fill all fields!";
    document.getElementById("message").style.color = "red";
    return;
  }

  const newStudent = {
    id: students.length + 1,
    name: name,
    marks: marks,
    department: dept,
  };
  students.push(newStudent);
  console.log("Student added:", newStudent);
  console.log("All students:", students);

  document.getElementById("nameInput").value = "";
  document.getElementById("marksInput").value = "";
  document.getElementById("deptInput").value = "";
}

console.log(students);
