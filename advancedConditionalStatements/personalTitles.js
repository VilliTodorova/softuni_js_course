function personalTitles(input) {

    let age = Number(input[0]);
    let sex = input[1];
    let title;

    switch (sex) {
        case "f":
            if (age >= 16) {
                title = "Ms.";
            } else {
                title = "Miss";
            };  break
        case "m":
            if (age >= 16) {
                title = "Mr.";
            } else {
                title = "Master";
            }; break
    }
    console.log(title);
}

personalTitles(["16","f"])
