function skiTrip(input) {

    let duration = Number(input[0]);
    let facility = input[1];
    let roomPrice = 0
    let review = input[2];
    let discount = 1;
    let tip = 1;

    if(facility === "apartment") {
        roomPrice = 25
        if (duration < 10) {
            discount = 0.7
        } else if (duration <= 15) {
            discount = 0.65
        } else {
            discount = 0.5
        }
    } else if (facility === "president apartment") {
        roomPrice = 35
        if (duration < 10) {
            discount = 0.9
        } else if (duration <= 15) {
            discount = 0.85
        } else {
            discount = 0.8
        }
    } else {
        roomPrice = 18
    }

    if (review === "positive") {
        tip = 1.25
    } else {
        tip = 0.9
    }

    let endPrice = (duration - 1) * roomPrice * discount * tip

    console.log(endPrice.toFixed(2));

}

skiTrip(["2",
"apartment",
"positive"])



