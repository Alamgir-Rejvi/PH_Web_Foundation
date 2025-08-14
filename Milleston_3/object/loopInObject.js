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

// for ... in loop for object
for (const loop in student){
    // console.log(loop);
    console.log(student[loop], "," , loop)
}



const arr = Object.keys(student);
console.log(arr) // student object is become array

// for ... of loop for array
for (const loopArrayType of arr) {
    console.log(loopArrayType , student[loopArrayType]);
};