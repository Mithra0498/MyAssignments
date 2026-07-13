// Function to launch the browser
function launchBrowser(browserName) {
    if (browserName.toLowerCase() === "chrome") {
        console.log("Launching Chrome browser");
    } else {
        console.log("Launching " + browserName + " browser");
    }
}

// Function to run tests
function runTests(testType) {
    switch (testType.toLowerCase()) {
        case "smoke":
            console.log("Running Smoke Tests");
            break;

        case "sanity":
            console.log("Running Sanity Tests");
            break;

        case "regression":
            console.log("Running Regression Tests");
            break;

        default:
            console.log("Running Smoke Tests");
    }
}

// Call the functions
launchBrowser("Chrome");
runTests("Regression");