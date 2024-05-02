function uniquePinCodes(input) {

    let firstNumLimit = Number(input[0]);
    let secondNumLimit = Number(input[1]);
    let thirdNumLimit = Number(input[2]);
    let print = "";

    for (let i = 2; i <= firstNumLimit; i += 2) {
        for (let j = 2; j <= secondNumLimit; j++) {
            let isPrime = true;
            for (let x = 2; x <= Math.sqrt(j); x++) {
                if (j % x === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                for (let k = 2; k <= thirdNumLimit; k += 2) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}

uniquePinCodes(["8",
"2",
"8"])
