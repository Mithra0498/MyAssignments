// Function to check whether a number is Positive, Negative, or Zero
function checkNumberType(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// Declare and initialize the variable
let num = -5;

// Call the function and print the result
console.log(checkNumberType(num));