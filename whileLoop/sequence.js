function sequence (input) {

    let magicNum = Number(input[0]);
    let counter = 1;

    while (counter <= magicNum) {
        console.log(counter);
        counter = counter * 2 + 1;
    }
}

sequence(["31"])