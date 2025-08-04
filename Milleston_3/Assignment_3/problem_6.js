/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here
var presentSalary = startingSalary;
for(var year = 1; year <= experience; year ++) {
    presentSalary = presentSalary + (presentSalary * 5/100)
}
console.log(presentSalary.toFixed(2));