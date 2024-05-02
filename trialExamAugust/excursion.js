function excursion(input) {

    let peopleInGroup = Number(input[0]);
    let nightsStay = Number(input[1]);
    let transportPassCount = Number(input[2]);
    let museumTicketCount = Number(input[3]);

    let totalCost = (peopleInGroup * (nightsStay * 20 + transportPassCount * 1.6 + museumTicketCount * 6)) * 1.25;

    console.log(totalCost.toFixed(2));
}

excursion(["20",
"14",
"30",
"6"])
