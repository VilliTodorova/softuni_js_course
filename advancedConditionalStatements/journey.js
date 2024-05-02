function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let stayType;
    let price = 0;

    if (budget <= 100){
        destination = "Bulgaria"
        if (season === "summer") {
            stayType = "Camp";
            price = budget * 0.3
        } else if (season === "winter") {
            stayType = "Hotel";
            price = budget * 0.7
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            stayType = "Camp";
            price = budget * 0.4
        } else if (season === "winter") {
            stayType = "Hotel";
            price = budget * 0.8
        }
    } else {
        destination = "Europe";
        stayType = "Hotel";
        price = budget * 0.9
    }
    
    console.log(`Somewhere in ${destination}\n${stayType} - ${price.toFixed(2)}`);
}

journey(["50", "summer"])