function fruitShop(input) {
    let item = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    if (day === "Saturday" || day === "Sunday") {
        if (item === "banana") {
            price = 2.7;
        } else if (item === "apple") {
            price = 1.25;
        } else if (item === "orange") {
            price = 0.9;
        } else if (item === "grapefruit") {
            price = 1.6;
        } else if (item === "kiwi") {
            price = 3;
        } else if (item === "pineapple") {
            price = 5.6;
        } else if (item === "grapes") {
            price = 4.2;
        } else {
            console.log("error");
        }
    } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        if (item === "banana") {
                price = 2.5;
        } else if (item === "apple") {
                price = 1.2;
        } else if (item === "orange") {
                price = 0.85;
        } else if (item === "grapefruit") {
                price = 1.45;
        } else if (item === "kiwi") {
                price = 2.7;
        } else if (item === "pineapple") {
                price = 5.5;
        } else if (item === "grapes") {
                price = 3.85;
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }

if (price != 0 ) {
    console.log((price * quantity).toFixed(2));
}
}

fruitShop(["tomato","Monday","0.5"])