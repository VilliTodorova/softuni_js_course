function projectsCreation(input) {

    let architectName = input[0];
    let projectsCount = Number(input[1]);
    let neededHours = projectsCount * 3;

    console.log(`The architect ${architectName} will need ${neededHours} hours to complete ${projectsCount} project/s.`);
}

projectsCreation(["George ", "4 "])