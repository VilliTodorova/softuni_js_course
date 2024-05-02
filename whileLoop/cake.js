function cake(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let totalCake = length * width;
    
    let index = 2;
    let command = input[index];
    
    while (totalCake > 0) {
        let piecesTaken = Number(command);
        
        if (command === "STOP") {
            console.log(`${totalCake} pieces are left.`);
            break;
        }

        if ((totalCake - piecesTaken) <= 0) {
            console.log(`No more cake left! You need ${piecesTaken - totalCake} pieces more.`);
            break;
        }
        totalCake -= piecesTaken;
        index++;
        command = input[index];
    }
}

cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);