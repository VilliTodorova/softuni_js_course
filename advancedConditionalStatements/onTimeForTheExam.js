function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);
    let examTotal = examHour * 60 + examMinutes;
    let arrivalTotal = arrivalHour * 60 + arrivalMinutes;
    let difference = Math.abs(examTotal - arrivalTotal);

    if (arrivalTotal < examTotal && (examTotal - arrivalTotal > 30)) {
        console.log("Early");
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60
        if (hours > 0) {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        } else {
            console.log(`${minutes} minutes before the start`);
        }
    } else if (arrivalTotal <= examTotal) {
        console.log("On time");
        let minutes = difference % 60;
        if (minutes > 0) {
            console.log(`${minutes} minutes before the start`);
        }
    } else {
        console.log("Late");
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60
        if (hours > 0) {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        } else {
            console.log(`${minutes} minutes after the start`);
        }
    }
    
}

onTimeForTheExam(["16",
"00",
"15",
"00"])
