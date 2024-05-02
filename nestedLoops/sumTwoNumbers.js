function sumTwoNumbers(input) {

    let start = Number(input[0]);
    let finish = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let isValid = true

    for (let x = start; x <= finish; x++) {
        for (let y = start; y <= finish; y++) {
            let result = x + y;
            counter++;
            if (result === magicNum) {
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNum})`);
                isValid = true;
                break;
            } else {
                isValid = false;
            }
        }
        if (isValid === true) {
            break;
        }
    }
    if (isValid === false) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}

sumTwoNumbers(["88",
    "888",
    "2000"])
