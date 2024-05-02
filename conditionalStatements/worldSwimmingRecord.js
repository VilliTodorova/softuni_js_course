function worldSwimmingRecord(input) {

    let recordSeconds = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let resistance = Math.floor(distance / 15) * 12.5
    let totalTime = distance * timePerMeter + resistance

    if (totalTime < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordSeconds).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["55555.67","3017","5.03"])
