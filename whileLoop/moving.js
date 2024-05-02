function moving (input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let roomSize = width * length * height;
    let boxVolume = 0
    let index = 3;
    let command = input[index];

    while (command !== "Done") {
        let boxCount = Number(command);
        boxVolume += boxCount;

        if (boxVolume > roomSize) {
            console.log(`No more free space! You need ${boxVolume - roomSize} Cubic meters more.`);
            break;
        }

        index++;
        command = input[index];

    }

    if (roomSize > boxVolume) {
        console.log(`${roomSize - boxVolume} Cubic meters left.`);
    }

}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
