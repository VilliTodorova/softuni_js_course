function concatenateData(input) {
    let firstName = input[0];
    let surname = input[1];
    let age = input[2];
    let city = input[3];

    console.log(`You are ${firstName} ${surname}, a ${age}-years old person from ${city}.`);
}

concatenateData(["Violeta", "Todorova", 34, "Burgas"])