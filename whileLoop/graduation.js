function graduation (input) {

    let index = 1;
    let name = input[0];
    let fails = 0;
    let grade = 1;
    let totalScores = 0;
    
    while (grade <= 12) {
        let score = Number(input[index]);
        index++;
        if (score < 4) {
            fails++;
        } else {
            totalScores += score;
            grade++;
        }

        if (fails >= 2) {
            break;
        }

        score = Number(input[index])
    }
    let averageScore = totalScores / 12;
    if (fails >= 2) {
        console.log(`${name} has been excluded at ${grade} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${averageScore.toFixed(2)}`);
    }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
