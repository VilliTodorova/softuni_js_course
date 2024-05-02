function basketballEquipment(input) {

    let annualFee = Number(input[0]);
    let sneakers = annualFee * 0.6;
    let tracksuit = sneakers * 0.8;
    let ball = tracksuit / 4;
    let accessories = ball / 5;
    let totalPrice = annualFee + sneakers + tracksuit + ball + accessories;

    console.log(totalPrice);
}

basketballEquipment(["550"])