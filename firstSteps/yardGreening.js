function yardGreening(input) {

    let sqMetersPrice = Number(input[0]) * 7.61
    let discount = sqMetersPrice * 0.18;
    let finalPrice = sqMetersPrice - discount;
    
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"])