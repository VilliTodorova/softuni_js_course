function hotelRoom(input) {

    let month = input[0];
    let duration = Number(input[1]);
    let priceApartment = 0;
    let priceStudio = 0
    let discount = 1;
    let facility;

    if (month === "May" || month === "October") {
        priceApartment = 65 * duration;
        priceStudio = 50 * duration;
        if (duration > 7 && duration <= 14) {
            priceStudio *= 0.95;
        } else if (duration > 14) {
            priceStudio *= 0.7;
            priceApartment *= 0.9;
        }
    } else if (month === "June" || month === "September") {
        priceApartment = 68.7 * duration;
        priceStudio = 75.2 * duration;
        if (duration > 14) {
            priceStudio *= 0.8;
            priceApartment *= 0.9;
        }
    } else if (month === "July" || month === "August") {
        priceApartment = 77 * duration;
        priceStudio = 76 * duration;
        if (duration > 14) {
            priceApartment *= 0.9
        }
    }

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.\nStudio: ${priceStudio.toFixed(2)} lv.`);
}

hotelRoom(["June",
    "14"])

