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