function tennisRanklist(input) {

    let tournamentsCount = Number(input[0]);
    let initialPoints = Number(input[1]);
    let pointsTournaments = 0;
    let wins = 0;

    for (let i = 2; i <= tournamentsCount + 1; i++) {
        let result = input[i];
        if (result === "W") {
            pointsTournaments += 2000;
            wins++;
        } else if (result === "F") {
            pointsTournaments += 1200;
        } else if (result === "SF") {
            pointsTournaments += 720;
        }
    }

    let averagePoints = pointsTournaments / tournamentsCount;
    let averageWins = wins / tournamentsCount * 100;

    console.log(`Final points: ${initialPoints + pointsTournaments}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${averageWins.toFixed(2)}%`);
}

tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
