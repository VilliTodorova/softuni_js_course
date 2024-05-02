function everest(input) {

    let day = 1;
    let height = 5364;
    let failed = false;
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "END") {
        let rest = command;
        switch(rest) {
            case "Yes": day++; break;
            default: break;
        }

        command = input[index];
        index++;
        
        if (day > 5) {
            failed = true;
            break;
        }

        let climbed = Number(command);
        height += climbed


        if (height >= 8848) {
            failed = false;
            break;
        }

        command = input[index];
        index++;

    }

    if (height < 8848) {
        failed = true
    }
    if (failed == false) {
        console.log(`Goal reached for ${day} days!`);
    } else {
        console.log(`Failed!\n${height}`);
    }
}

everest(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])
