function areaOfFigures(input) {
    let shape = input[0];
    let area;

    if (shape === "square") {
        let side = Number(input[1]);
        area = Math.pow(side, 2);
    } else if (shape === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = sideA * sideB;
    } else if (shape === "circle") {
        let radius = Number(input[1]);
        area = Math.PI * Math.pow(radius, 2);
    } else {
        let side = Number(input[1]);
        let height = Number(input[2]);
        area = side * height / 2
    }

    console.log(area.toFixed(3));
}

areaOfFigures(["triangle",
"4.5",
"20"])


