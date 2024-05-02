function toyShop(input) {

    let vacationPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlesPrice = puzzlesCount * 2.60;
    let dollsPrice = dollsCount * 3;
    let teddyBearPrice = teddyBearCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2;

    let totalCount = puzzlesCount + dollsCount + teddyBearCount + minionsCount + trucksCount;
    let totalPrice = puzzlesPrice + dollsPrice + teddyBearPrice + minionsPrice + trucksPrice;

    if (totalCount >= 50) {
        totalPrice *= 0.75
    }

    let afterRent = totalPrice * 0.9

    if (afterRent >= vacationPrice) {
        console.log(`Yes! ${(afterRent - vacationPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(vacationPrice - afterRent).toFixed(2)} lv needed.`);
    }
}

toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])

