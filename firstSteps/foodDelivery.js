function foodDelivery(input) {

    let chicken = Number(input[0]) * 10.35;
    let fish = Number(input[1]) * 12.40;
    let vegetarian = Number(input[2]) * 8.15;
    let dessert = (chicken + fish + vegetarian) * 0.2;
    let totalPrice = chicken + fish + vegetarian + dessert + 2.50;

    console.log(totalPrice);

}

foodDelivery(["2 ","4 ","3 "])