function favoriteMovie(input) {

    let index = 0;
    let filmsCount = 0;

    let command = input[index];
    index++;


    while (filmsCount <= 7) {
        let filmName = command;
        let sum = 0;

        for (let i = 0; i < filmName.length; i++) {
            let char = Number(title[i]);
            sum += char.charCodeAt(0);
        }
    }
}

favoriteMovie(["Matrix",
"Breaking bad",
"Legend",
"STOP"])
