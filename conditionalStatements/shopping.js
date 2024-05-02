function shopping(input) {

    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = 1

    if (gpuCount > cpuCount) {
        discount = 0.85
    }

    let gpuPrice = gpuCount * 250;
    let cpuPrice = cpuCount * gpuPrice * 0.35;
    let ramPrice = ramCount * gpuPrice * 0.10;
    let totalPrice = (gpuPrice + cpuPrice + ramPrice) * discount

    if (budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }

}

shopping(["920.45",
"3",
"1",
"1"])

