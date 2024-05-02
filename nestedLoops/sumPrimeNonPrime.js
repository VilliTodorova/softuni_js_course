function sumPrimeNonPrime(input) {

    let index = 0;
    let sumPrime = 0;
    let sumNonPrime = 0;
    
    let command = input[index];
    index++;

    while (command !== "stop") {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }

        if (currentNum == 1) {
            sumPrime += currentNum;
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;

        for (let num = 2; num <= Math.sqrt(currentNum); num++) {
            if (currentNum % num === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sumPrime += currentNum;
        } else {
            sumNonPrime += currentNum;

        }
        
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}\nSum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
