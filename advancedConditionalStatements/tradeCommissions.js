function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commission;

    switch (city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                commission = 0.05
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.07
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.08
            } else if (sales > 10000) {
                commission = 0.12
            } else {
            }; break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                commission = 0.045
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.075
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.10
            } else if (sales > 10000) {
                commission = 0.13
            } else {
            }; break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                commission = 0.055
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.08
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.12
            } else if (sales > 10000) {
                commission = 0.145
            } else {
            }; break;
    }

    let totalCommission = sales * commission

    if ((city != "Sofia" && city != "Varna" && city != "Plovdiv") || sales < 0) {
        console.log("error");
    } else {
        console.log(totalCommission.toFixed(2));
    }

    }

    tradeCommissions(["Kaspichan", "-50"])

