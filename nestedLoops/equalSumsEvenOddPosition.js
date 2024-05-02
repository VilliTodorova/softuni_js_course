function equalSumsEvenOddPosition(input) {

    let start = Number(input[0]);
    let finish = Number(input[1]);
    let print = "";

    for (let i = start; i <= finish; i++) {
        let currentNum = "" + i;
        let sumEven = 0;
        let sumOdd = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                sumEven += currentDigit;
            } else {
                sumOdd += currentDigit;
            }
        }
        if (sumEven === sumOdd) {
            print += `${i} `
        }
    }
    console.log(print);
}

equalSumsEvenOddPosition(["100000",
"100050"])
