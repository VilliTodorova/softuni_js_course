function numbersDivided9(input) {

    let start = Number(input[0]);
    let finish = Number(input[1]);
    let sum = 0;
    let buffer = "";

    for (let i = start; i <= finish; i++) {
        if (i % 9 == 0) {
            sum += i;
            buffer += i + "\n";
        }
    }
    console.log(`The sum: ${sum}\n${buffer}`);
}

numbersDivided9(["100", "200"])