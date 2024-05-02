function sumNumbers (input) {

    let num = Number(input[0]);
    let index = 1;
    let command = Number(input[index]);

    let sum = 0;

    while (true) {
        if (sum >= num) {
            break;
        }
        
        let currentNum = Number(input[index]);
        index++;

        sum += currentNum;
    }

    console.log(sum);
}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
