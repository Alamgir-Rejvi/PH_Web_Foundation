function totalFine( fare ) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }else {
        let fine = fare + (fare * 20/100) + 30;
        return fine;
    }
}
// let show = totalFine((552));
// console.log(show);


function  onlyCharacter( str ) {
    if (typeof str !== "string") {
        return "Invalid";
    }else {
        return str.replace(/\s+/g,"").toUpperCase();
    }
}
// let output = onlyCharacter(true);
// console.log(output);



function  bestTeam( player1, player2 ) {
    let team1 = player1.foul + player1.cardY + player1.cardR;
    let team2 = player2.foul + player2.cardY + player2.cardR;

    if (typeof player1 !== "object" || player1 === null || typeof player2 !== "object" || player2 === null) {
        return "Invalid"
    }
    else {
        if (team1 < team2) {
            return player1.name;
        }else if (team2 < team1) {
            return player2.name
        }else {
            return "Tie";
        }
    }
}
// let result = bestTeam(
//     {name: "Brazil", foul: 5, cardY: 1, cardR: 0},
//     {name: "Argentina", foul: 7, cardY: 0, cardR: 0}
// )
// console.log(result)



function  isSame(arr1 , arr2 ) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
   
    if ((arr1.length !== arr2.length)) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// let show = isSame([1, undefined , 3] , [1,null ,3]);
// console.log(show);


function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }
    let total = 0;
    let passCount = 0;
    let failCount = 0;
    for (let mark of marks) {
        total += mark;
        if (mark >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }
    let finalScore = Math.round(total / marks.length);
    return {
        finalScore: finalScore,
        pass: passCount,
        fail: failCount
    };
}

// console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));