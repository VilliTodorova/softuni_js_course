function vacation (input) {

    let vacationCost = Number(input[0]);
    let availableMoney = Number(input[1]);
    let days = 0;
    let spendingDays = 0;
    let index = 2;
    let command = input[index];

    while (availableMoney >= 0) {
        days++;
        index++;

        if (command === "spend") {
            spendingDays++;
            let spentMoney = Number(input[index]);
            availableMoney -= spentMoney;

            if (availableMoney < 0) {
                availableMoney = 0
            }

            if (spendingDays === 5) {
                console.log(`You can't save the money.\n${days}`);
                break;
            }
        } else if (command === "save") {
            spendingDays = 0;
            let savedMoney = Number(input[index]);
            availableMoney += savedMoney;

            if (availableMoney >= vacationCost) {
                console.log(`You saved the money for ${days} days.`);
                break;
            }
        }

        index++;
        command = input[index];
    }
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
