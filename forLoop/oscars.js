function oscars(input) {

    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let juryCount = Number(input[2]);

    for (let i = 3; i <= juryCount * 2 + 1; i += 2) {
        let juryName = input[i];
        let juryPoints = Number(input[i + 1]);
        let juryTotalPoints = juryName.length * juryPoints / 2;
        academyPoints += juryTotalPoints;
        if (academyPoints >= 1250.5) {
            break;
        }
    }
    
    if (academyPoints > 1250.50) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    }
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

