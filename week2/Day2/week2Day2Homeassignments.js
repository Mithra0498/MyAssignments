// Declare a global variable and assign the browser name
let browser = "Chrome";

// Function that accepts a callback function
function checkBrowserVersion(callback) {

    // Wait for 2 seconds, then call the callback
    // and pass the browser value as an argument
    setTimeout(() => callback(browser), 2000);
}

// Callback function to display the browser version
function showBrowser(version) {
    console.log("Browser version using callback: " + version);
}

// Call the function and pass the callback function
checkBrowserVersion(showBrowser);
