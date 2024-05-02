function coins (input) {

    let change = Number(input[0]);
    let converted = Math.floor(change * 100);
    let counter = 0;

    while (converted > 0) {
        if (converted >= 200) {
            converted -= 200;
            counter++;
        } else if (converted >= 100) {
            converted -= 100;
            counter++;
        } else if (converted >= 50) {
            converted -= 50;
            counter++;
        } else if (converted >= 20) {
            converted -= 20;
            counter++;
        } else if (converted >= 10) {
            converted -= 10;
            counter++;
        } else if (converted >= 5) {
            converted -= 5;
            counter++;
        } else if (converted >= 2) {
            converted -= 2;
            counter++;
        } else if (converted >= 1) {
            converted -= 1;
            counter++;
        }
    }
    console.log(counter);
}

coins(["0.56"])