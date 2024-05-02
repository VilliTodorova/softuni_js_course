function vacationBooksList(input) {

    let currentBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerBook = Number(input[2]);
    let neededTime = currentBook / pagesPerHour / daysPerBook;
    console.log(neededTime);
}

vacationBooksList(["212 ","20 ","2 "])