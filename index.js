// Using Math.min() to find the youngest students and find() method to return the name
function showYoungestStudent(students) {
    var min = Math.min(...students.map(item => item.age));
    var minStudent = students.find(item => item.age === min);
    var nameOfStudent = minStudent.name;
    return nameOfStudent + " is the youngest student.";
}

var students = [{ name: "Sura", age: 24 }, { name: "Noor", age: 20 }, { name: "Hajer", age: 22 }];

console.log(showYoungestStudent(students));

// Using for loop and if statment to find the youngest students
function showYoungestStudent2(students) {
    var temp = "";
    for (var i = 0; i < students.length - 1; i++) {
        if (students[i].age < students[i + 1].age) {
            temp = students[i].name
        }
    }
    return temp + " is the youngest student.";
}
console.log(showYoungestStudent2(students));

module.exports = showYoungestStudent;
module.exports = showYoungestStudent2;