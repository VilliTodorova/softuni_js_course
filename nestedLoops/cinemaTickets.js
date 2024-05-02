function cinemaTickets(input) {

    let index = 0;
    let totalSold = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let command = input[index];
    index++;

    while (command != "Finish") {
        let filmName = command;
        let filmTickets = 0;
        command = input[index];
        index++;
        let freeSpots = Number(command);
        command = input[index];
        index++;
        while (command !== "End") {
            let ticketBought = command;
            filmTickets++;
            switch (ticketBought) {
                case "student":
                    studentTickets++;
                    break;
                case "standard":
                    standardTickets++;
                    break;
                case "kid":
                    kidTickets++;
                    break;
            }
            if (filmTickets >= freeSpots) {
                break;
            }
            command = input[index];
            index++;
        }
        totalSold += filmTickets;
        console.log(`${filmName} - ${(filmTickets / freeSpots * 100).toFixed(2)}% full.`);
        command = input[index];
        index++;
    }
    console.log(`Total tickets: ${totalSold}\n${(studentTickets / totalSold * 100).toFixed(2)}% student tickets.\n${(standardTickets / totalSold * 100).toFixed(2)}% standard tickets.\n${(kidTickets / totalSold * 100).toFixed(2)}% kids tickets.`);

}

cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])