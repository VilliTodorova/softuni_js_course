function maxNumber (input) {

    let index = 0;
    let command = input[index];
    let maxNum = -Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command)
        if (num > maxNum) {
            maxNum = num
        }

        index++;
        command = input[index];
    }

    console.log(maxNum);

}

maxNumber(["-1",
"-2",
"Stop"])

