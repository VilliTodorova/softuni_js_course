function building(input) {

    let floorsCount = Number(input[0]);
    let roomsCount = Number(input[1]);
    let letter = "";
    let num = 0;

    for (let floor = floorsCount; floor > 0; floor--) {
        let output = ""
        if (floor === floorsCount) {
            letter = "L";
        } else if(floor % 2 === 0) {
            letter = "O";
        } else if(floor % 2 !== 0) {
            letter = "A";
        }
        for (let room = 0; room < roomsCount; room++) {
            num = room;
            output += `${letter}${floor}${num} `;
        }
        console.log(output);
    }
}

building(["6", "4"])