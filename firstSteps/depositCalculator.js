function depositCalculator(input) {

    let depositAmount = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterest = Number(input[2]) / 100;
    let finalAmount = depositAmount + depositTerm * ((depositAmount * annualInterest) / 12);
    console.log(finalAmount);
}

depositCalculator(["200 ","3 ","5.7 "])