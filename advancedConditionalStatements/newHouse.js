function newHouse(input) {

    let flower = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    let discount = 1;
    if (flower === "Roses") {
        price = 5;
        if (count > 80) {
            discount = 0.9
        }
    } else if (flower === "Dahlias") {
        price = 3.8;
        if (count > 90) {
            discount = 0.85
        }
    } else if (flower === "Tulips") {
        price = 2.8;
        if (count > 80) {
            discount = 0.85
        }
    } else if (flower === "Narcissus") {
        price = 3;
        if (count < 120) {
            discount = 1.15
        }
    } else if (flower === "Gladiolus") {
        price = 2.5;
        if (count < 80) {
            discount = 1.2
        }
    }
    let total = price * discount * count
    if (budget >= total) {
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Narcissus",
    "119",
    "360"])

