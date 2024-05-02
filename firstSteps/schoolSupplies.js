function schoolSupplies(input) {

    let pens = Number(input[0]) * 5.8;
    let markers = Number(input[1]) * 7.2;
    let detergent = Number(input[2]) * 1.2;
    let discount = Number(input[3]) / 100;
    let neededMoney = (pens + markers + detergent) * (1 - discount)

    console.log(neededMoney);
}

schoolSupplies(["2 ","3 ","4 ","25 "])