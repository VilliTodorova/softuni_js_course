function histogram(input) {

    let count = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= count; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber < 200) {
            p1++
        } else if (currentNumber < 400) {
            p2++
        } else if (currentNumber < 600) {
            p3++
        } else if (currentNumber < 800) {
            p4++
        } else {
            p5++
        }
    }
    console.log(`${(p1 / count * 100).toFixed(2)}%`);
    console.log(`${(p2 / count * 100).toFixed(2)}%`);
    console.log(`${(p3 / count * 100).toFixed(2)}%`);
    console.log(`${(p4 / count * 100).toFixed(2)}%`);
    console.log(`${(p5 / count * 100).toFixed(2)}%`);
}

histogram(["3",
    "1",
    "2",
    "999"])
