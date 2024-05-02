function trekkingMania(input) {

    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let groupsCount = Number(input[0]);
    let totalPeople = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let peopleCount = Number(input[i]);
        totalPeople += peopleCount;
        if (peopleCount <= 5) {
            musala += peopleCount
        } else if (peopleCount <= 12) {
            montBlanc += peopleCount
        } else if (peopleCount <= 25) {
            kilimanjaro += peopleCount
        } else if (peopleCount <= 40) {
            k2 += peopleCount
        } else {
            everest += peopleCount
        }
    }

    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(montBlanc / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
