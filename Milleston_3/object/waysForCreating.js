// literal object
const myInfo = {
    name: "Alamgir",
    roll: 1288420
};
console.log(myInfo);



// Using new Object()
const myInfor = new Object();
myInfor.name = "Alamgir";
myInfor.roll = 1288420;
console.log(myInfor);



// Constructor Function
function Student(name, roll) {
    this.name = name;
    this.roll = roll;
}
const stu1 = new Student("Alamgir", 1287997);
const stu2 = new Student("Rejvi", 1287997);
console.log(stu1);
console.log(stu2);



// ES6 Class Syntax
class Studentt {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
}
const student1 = new Studentt("MFA", 1288420);
console.log(student1)

// there are others ways....
