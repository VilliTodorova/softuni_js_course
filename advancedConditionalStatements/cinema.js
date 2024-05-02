function cinema(input) {

    let screeningType = input[0];
    let rows = Number(input[1]);
    let column = Number(input[2]);
    let price = 0

    if (screeningType === "Premiere") {
        price = 12
    } else if (screeningType === "Normal") {
        price = 7.50
    } else if (screeningType === "Discount") {
        price = 5
    }

    let income = rows * column * price
    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"])
