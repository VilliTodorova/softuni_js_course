function walking (input) {

    let stepsDone = 0;
    let index = 0;

    while (stepsDone < 10000) {
        let command = input[index];
        if (command === "Going home") {
            index++;
            let stepsToHome = Number(input[index]);
            stepsDone += stepsToHome;
            if (stepsDone < 10000) {
                console.log(`${10000 - stepsDone} more steps to reach goal.`);
            } else {
                console.log(`Goal reached! Good job!\n${stepsDone - 10000} steps over the goal!`);
            }
            break;
        } else {
            let currentSteps = Number(input[index])
            stepsDone += currentSteps;
            if (stepsDone >= 10000) {
                console.log(`Goal reached! Good job!\n${stepsDone - 10000} steps over the goal!`);
                break;
            }
        }

        index++;

    }
}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])