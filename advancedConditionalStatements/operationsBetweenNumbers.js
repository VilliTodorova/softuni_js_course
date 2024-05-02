function operationsBetweenNumbers(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result;
    let evenOdd;


    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = (num1 / num2).toFixed(2);
    } else if (operator === "%") {
        result = num1 % num2;
    }

    if (operator === "+" || operator === "-" || operator === "*") {
        if (result % 2 == 0) {
            evenOdd = "even";
        } else {
            evenOdd = "odd"
        }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOdd}`);
    } else if ((operator === "/" || operator === "%") && num2 != 0) {
        console.log(`${num1} ${operator} ${num2} = ${result}`);
    } else {
        console.log(`Cannot divide ${num1} by zero`);
    }
}

operationsBetweenNumbers(["112",
"0",
"/"])


