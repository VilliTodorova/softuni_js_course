function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let price = 0;
    let discount = 1;
    let extraDiscount = 1;

    if (season === "Spring") {
        price = 3000;

    } else if (season === "Summer" || season === "Autumn") {
        price = 4200;

    } else if (season === "Winter") {
        price = 2600;

    }

    if (fishermen <= 6) {
        discount = 0.9
    } else if (fishermen <= 11) {
        discount = 0.85
    } else {
        discount = 0.75
    }

    if (fishermen % 2 == 0 && season != "Autumn") {
        extraDiscount = 0.95
    }

    let totalCost = price * discount * extraDiscount

    if (budget >= totalCost) {
        console.log(`Yes! You have ${(budget - totalCost).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["3000", "Summer", "11"])
