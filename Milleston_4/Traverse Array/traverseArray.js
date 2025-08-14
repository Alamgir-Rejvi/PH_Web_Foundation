const fruits = ['apple', 'banana', 'fineapple', 'mango', 'taal'];
// traverse array by for loop
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// traverse array by while loop
let k = 0;
while (k < fruits.length) {
    console.log(fruits[k])
    k++;
}



// traverse array by for...of loop
for (let fruit of fruits) {
    console.log(fruit)
}


// How it works step-by-step: 
// 1) for — starts the loop.
// 2 ) (let fruit of fruits) — fruit → temporary variable that holds each value one-by-one.
// of → keyword that means "take the value from" the iterable. 
// fruits → the array we are looping through. 
// 3 ) On first loop → fruit = "Apple" → console.log("Apple") 4) On second loop → fruit = "Banana" → console.log("Banana")...continue
//  Loop ends when there are no more values.



// using continue and break;
const numbers = [12, 34, 332,45, 76, 23,98,65];
for (let num of numbers){
    if (num === 34){
        continue;
    }
    console.log(num);
}

console.log("<br>")
for (let num of numbers){
    if (num === 76) {
        break;
    }
    console.log(num);
}

















