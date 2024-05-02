function exam(input) {

    let studentsCount = Number(input[0]);
    let groupOne = 0;
    let groupTwo = 0;
    let groupThree = 0;
    let groupFour = 0;
    let totalScore = 0;

    let index = 1;

    for (let i = 1; i <= studentsCount; i++) {
        let score = Number(input[i]);
        totalScore += score;
        if (score >= 5) {
            groupOne++;
        } else if (score >= 4) {
            groupTwo++;
        } else if (score >= 3) {
            groupThree++;
        } else if (score >= 2) {
            groupFour++;
        }
    }

    console.log(`Top students: ${(groupOne / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(groupTwo / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(groupThree / studentsCount * 100).toFixed(2)}%`);
    console.log(`Fail: ${(groupFour / studentsCount * 100).toFixed(2)}%`);
    console.log(`Average: ${(totalScore / studentsCount).toFixed(2)}`);
}

exam(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
