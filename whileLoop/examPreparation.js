function examPreparation(input) {
    let failsAllowed = Number(input.shift());
    let failsCounter = 0;
    let goodGradesCounter = 0;
    let gradesSum = 0;
    let lastProblem = "";
    let currentProblem;
    let grade = 0


    while (failsCounter < failsAllowed) {
        currentProblem = input.shift();
        grade = Number(input.shift());

        if (currentProblem == "Enough") {
            let totalCounter = failsCounter + goodGradesCounter;
            let averageScore = gradesSum / totalCounter;
            console.log(`Average score: ${averageScore.toFixed(2)}`);
            console.log(`Number of problems: ${totalCounter}`);
            console.log(`Last problem: ${lastProblem} `);
            break;
        }
        if (grade <= 4) {
            failsCounter++;
        } else {
            goodGradesCounter++;
        }
        lastProblem = currentProblem;
        gradesSum += grade;
    } if (failsCounter == failsAllowed) {
        console.log(`You need a break, ${failsCounter} poor grades.`)
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
