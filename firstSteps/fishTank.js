function fishTank(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]) / 100;
    let volume = (length * width * height / 1000) * (1 - percent)

    console.log(volume);
}

fishTank(["85 ","75 ","47 ","17 "])