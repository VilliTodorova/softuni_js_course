function petShop(input) {

    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let dogPrice = dogFood * 2.5;
    let catPrice = catFood * 4;
    let totalPrice = dogPrice + catPrice;

    console.log(`${totalPrice} lv.`);
}

petShop(["5 ", "4 "])