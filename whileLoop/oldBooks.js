function oldBooks (input) {

    let index = 0
    let favBook = input[index];
    index++
    let checked = 0;
    let command = input[index];

    while (command !== favBook) {
        if (command === "No More Books") {
            console.log(`The book you search is not here!\nYou checked ${checked} books.`);
            break;
        }
        checked++;
        index++;
        command = input[index];
    }
    if (command === favBook) {
        console.log(`You checked ${checked} books and found it.`);
    }
}

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
