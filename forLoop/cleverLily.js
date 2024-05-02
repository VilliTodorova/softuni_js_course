function cleverLily(input) {

    let age = Number(input[0]);
    let laundryMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toyCount = 0;
    let savedFromEven = 0;
    let totalSavedBD = 0
    let stolen = 0;    

    for (let i = 1; i <= age; i++) {
        if (i % 2 != 0) {
            toyCount++
        } else {
            savedFromEven += 10;
            totalSavedBD += savedFromEven
            stolen++;
        }
    }
    let savedFromToys = toyCount * toyPrice
    let totalMoney = totalSavedBD + savedFromToys - stolen
    if (totalMoney >= laundryMachine) {
        console.log(`Yes! ${(totalMoney - laundryMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(laundryMachine - totalMoney).toFixed(2)}`);
    }
}

cleverLily(["10",
"170.00",
"6"])
