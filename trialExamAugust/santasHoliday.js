function santasHoliday(input) {

    let durationStay = Number(input[0]);
    let accommodationType = input[1];
    let review = input[2];
    let accommodationCost = 0;
    let discount = 1;
    let tip = 1;

    if (durationStay < 10) {
        switch (accommodationType) {
            case "room for one person": accommodationCost = 18; break;
            case "apartment": accommodationCost = 25; discount = 0.7; break;
            case "president apartment": accommodationCost = 35; discount = 0.9; break;
        }
    } else if (durationStay <= 15) {
        switch (accommodationType) {
            case "room for one person": accommodationCost = 18; break;
            case "apartment": accommodationCost = 25; discount = 0.65; break;
            case "president apartment": accommodationCost = 35; discount = 0.85; break;
        }
    } else if (durationStay > 15) {
        switch (accommodationType) {
            case "room for one person": accommodationCost = 18; break;
            case "apartment": accommodationCost = 25; discount = 0.5; break;
            case "president apartment": accommodationCost = 35; discount = 0.8; break;
        }
    }

    switch (review) {
        case "positive": tip = 1.25; break;
        case "negative": tip = 0.9; break;
    }

    let totalCost = (durationStay - 1) * accommodationCost * discount * tip

    console.log(totalCost.toFixed(2));
}

santasHoliday(["30",
    "president apartment",
    "negative"])