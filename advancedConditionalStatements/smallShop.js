function smallShop(input) {

    let item = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let price;

    switch (city) {
        case "Sofia":
            if (item === "coffee") {
                price = 0.50;
            } else if (item === "water") {
                price = 0.80;
            } else if (item === "beer") {
                price = 1.20;
            } else if (item === "sweets") {
                price = 1.45;
            } else {
                price = 1.60;
            }; break;
        case "Plovdiv":
            if (item === "coffee") {
                price = 0.40;
            } else if (item === "water") {
                price = 0.70;
            } else if (item === "beer") {
                price = 1.15;
            } else if (item === "sweets") {
                price = 1.30;
            } else {
                price = 1.50;
            }; break;
        case "Varna":
            if (item === "coffee") {
                price = 0.45;
            } else if (item === "water") {
                price = 0.70;
            } else if (item === "beer") {
                price = 1.10;
            } else if (item === "sweets") {
                price = 1.35;
            } else {
                price = 1.55;
            }; break;
    }
    console.log(price * quantity);
}

smallShop(["coffee","Varna","2"])
