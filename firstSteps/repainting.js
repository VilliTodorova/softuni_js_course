function repainting(input) {

    let nylon = Number(input[0]) * 1.5 + 2 * 1.5
    let paint = Number(input[1]) * 14.5 * 1.1
    let thinner = Number(input[2]) * 5
    let hoursWork = Number(input[3])
    let totalPrice = (nylon + paint + thinner + 0.4) * 0.3 * hoursWork + (nylon + paint + thinner + 0.4)

    console.log(totalPrice);

}

repainting(["10 ","11 ","4 ","8 "])