// Reverse an Array

const numbers = [1,2,3,4,5];
// for loop with unshift
let reversed = [];
for (let i = 0; i < numbers.length;i++){
    reversed.unshift(numbers[i]);

}
// console.log(reversed);



// by reversing initialization
// for (let i = numbers.length-1; i >= 0; i--){
//     reversed.push(numbers[i])
// }
// console.log(reversed);


// by using for...of loop
for(const num of numbers){
    reversed.unshift(num);
}
console.log(reversed);