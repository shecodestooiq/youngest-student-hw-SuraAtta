// Using Math.min() to find the youngest students and find() method to return the name
function showYoungestStudent(students) {
    if (students.length === 0){
        return "No students provided.";
    } else{
        var min = Math.min(...students.map(item => item.age));
        var minStudent = students.find(item => item.age === min);
        var nameOfStudent = minStudent.name;
        return nameOfStudent + " is the youngest student.";
    }
}

userDefinedStudents = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 2 },
    { name: 'Charlie', age: 21 },
];
console.log(showYoungestStudent(userDefinedStudents));

// Using for loop and if statment to find the youngest students
function showYoungestStudent2(students) {
    var temp = "";
    if (students.length === 0){
        return "No students provided.";
    } else {
    for (var i = 0; i < students.length - 1; i++) {
        if (students[i].age < students[i + 1].age) {
            temp = students[i].name
        }
    }
    return temp + " is the youngest student.";
}
}
console.log(showYoungestStudent2(userDefinedStudents));

module.exports = showYoungestStudent;
module.exports = showYoungestStudent2;