/** Problem -01 ( Divide the Asset ) */
var area = 15;
//write your code here
var perPortion = area/2;
console.log(perPortion);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money >= 25000){
    console.log("Laptop");
}else if(money >= 10000 ){
    console.log("Cycle");
}else{
    console.log("Chocolate");
};


/** Problem -03 ( Medicine Planner ) */
var lastDay = 4;
//write your code here
var list = "";
for (var i = 1; i <= lastDay; i++) {
    if (i % 3 === 0) {
        list += i + " - medicine\n";
    } else {
        list += i + " - rest\n"
    }
}
console.log(list);


/** Problem 04 - (Delete / Store) */
var fileName= "slipdf.txt";
//write your code here
if(fileName.startsWith("#")){
    console.log("Store")
}else if(fileName.endsWith(".pdf")){
    console.log("Store");
}else if (fileName.endsWith(".docx")){
    console.log("Store")
}
else{
    console.log("Delete")
};



/** Problem 05 - ( PH Email Generator )  */
var student= { name: "monu" , roll: 99,department: "eee"}
//write your code here
var email = student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(email);


/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here
var presentSalary = startingSalary;
for(var year = 1; year <= experience; year ++) {
    presentSalary = presentSalary + (presentSalary * 5/100)
}
console.log(presentSalary.toFixed(2));