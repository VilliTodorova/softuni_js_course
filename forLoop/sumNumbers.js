function sumNumbers(input) {

    let asString = input[0];
    let sum = 0;

    for (let i = 0; i < asString.length; i++) {
        let num = Number(asString[i]);
        sum += num;
    }

    console.log(`The sum of the digits is:${sum}`);

}

sumNumbers(["564891"])