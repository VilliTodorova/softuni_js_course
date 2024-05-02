function timePlus15Minutes(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    if (minutes < 45) {
        minutes += 15
    } else {
        hours = (hours + 1) % 24
        minutes = (minutes + 15) % 60
    }
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`)
    }
}

timePlus15Minutes(["1", "46"])