function seriesCalculator(input) {

    let seriesName = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let duration = Number(input[3]);

    let totalTime = seasonsCount * ((episodesCount) * duration) * 1.2 + seasonsCount * 10

    console.log(`Total time needed to watch the ${seriesName} series is ${totalTime} minutes.`);
}

seriesCalculator(["Riverdale",
"3",
"21",
"45"])
