function footballKit(input) {

    let tshirtCost = Number(input[0]);
    let amountForGift = Number(input[1]);

    let shortsCost = tshirtCost * 0.75;
    let socksCost = shortsCost * 0.2;
    let spikesCost = (tshirtCost + shortsCost) * 2;

    let totalCost = (tshirtCost + shortsCost + socksCost + spikesCost) * 0.85;

    if (totalCost >= amountForGift) {
        console.log(`Yes, he will earn the world-cup replica ball!\nHis sum is ${totalCost.toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.\nHe needs ${(amountForGift - totalCost).toFixed(2)} lv. more.`);
    }
}

footballKit(["25",
"100"])
