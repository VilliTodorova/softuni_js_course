function godzillaVsKong(input) {

    let filmBudget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let extasCostume = Number(input[2]);
    let extrasPrice = extrasCount * extasCostume

    if (extrasCount >= 150) {
        extrasPrice *= 0.9
    }

    let neededMoney = filmBudget * 0.1 + extrasPrice

    if (neededMoney > filmBudget) {
        console.log(`Not enough money!\nWingard needs ${(neededMoney - filmBudget).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!\nWingard starts filming with ${(filmBudget - neededMoney).toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["15437.62",
"186",
"57.99"])
