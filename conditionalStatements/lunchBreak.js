function lunchBreak(input) {

    let showName = input[0];
    let showDuration = Number(input[1]);
    let breakDuration = Number(input[2]);
    let freeTime = breakDuration - breakDuration / 8 - breakDuration / 4

    if (freeTime >= showDuration) {
        console.log(`You have enough time to watch ${showName} and left with ${Math.ceil(freeTime - showDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${showName}, you need ${Math.ceil(showDuration - freeTime)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",
    "48",
    "60"])

