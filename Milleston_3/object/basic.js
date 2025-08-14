const student = {
    name: "Alamgir",
    roll: 1288420,
    institute: {
        name: "IDB",
        location: "agargaon",
        'my tsp' : "New Horizon",
        students: ["Nishad","Rasel","MFA","Fahim"]
    }
}
student['name'] = "Rejvi";
console.log(student.name);
delete student.institute.location;
console.log(student);
// console.log(student)
// console.log(student.name);
// console.log(student.institute['my tsp'])
// console.log(student.institute.students);
// console.log(student.institute.students[2]);