function specialNumbers(input) {

    let yourNum = Number(input[0]);
    let print = ""

    for (let i = 1111; i <= 9999; i++) {
        let isSpecial = true;
        let numAsString = i + "";

        for (let j = 0; j < numAsString.length; j++) {
            let currentDigit = Number(numAsString.charAt(j));

            if (currentDigit === 0) {
                isSpecial = false;
                break;
            }

            if (yourNum % currentDigit !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            print += `${numAsString} `;
        }
    }
    console.log(print);
}

specialNumbers(["11"])