function sumOfSeconds(input){
   
    let one = Number(input[0]);
    let two = Number(input[1]);
    let three = Number(input[2]);
    let total = one + two + three;
    let minutes = Math.floor(total /60);
    let seconds = total % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}   

sumOfSeconds(["14", "12",
"10"])

