function accountBalance (input) {

    let index = 0;
    let command = input[index];
    let total = 0

    while (command !== "NoMoreMoney") {
        let money = Number(command)
        if (money < 0) {
            console.log("Invalid operation!"); 
            break;
        } else {
            console.log(`Increase: ${money.toFixed(2)}`);
            total += money;
        }
        
        index++;
        command = input[index];

    }
    
    console.log(`Total: ${total.toFixed(2)}`);
}

accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
