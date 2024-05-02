function trainTheTrainers(input) {

    let juryCount = Number(input[0]);
    let index = 1;
    let totalScore = 0;
    let presentationCount = 0;

    let command = input[index];
    index++;

    while (command !== "Finish") {
        let presentationName = command;        
        let totalPresentationScore = 0;

        for (let i = 0; i < juryCount; i++) {
            let currentScore = Number(input[index]);
            totalPresentationScore += currentScore;
            index++;
        }

        console.log(`${presentationName} - ${(totalPresentationScore / juryCount).toFixed(2)}.`);
        totalScore += totalPresentationScore;
        presentationCount++;

        command = input[index];
        index++;
    }

    console.log(`Student's final assessment is ${(totalScore / juryCount / presentationCount).toFixed(2)}.`);
}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])
