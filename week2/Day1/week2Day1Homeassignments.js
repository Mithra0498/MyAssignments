// Function to find the length of the last word
function lengthOfLastWord(s) {
    s = s.trim();                  // Remove leading/trailing spaces
    let words = s.split(" ");      // Split into words
    let lastWord = words[words.length - 1]; // Get last word
    return lastWord.length;        // Return length
}

// Function to check if two strings are anagrams
function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase
    str1 = str1.replace(/\s/g, "").toLowerCase();
    str2 = str2.replace(/\s/g, "").toLowerCase();

    // Check length
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort and compare
    let sorted1 = str1.split("").sort().join("");
    let sorted2 = str2.split("").sort().join("");

    return sorted1 === sorted2;
}

// ----------------------
// Test Cases
// ----------------------

let s1 = "Hello World";
let s2 = " fly me to the moon ";

console.log("Length of last word in \"" + s1 + "\":", lengthOfLastWord(s1));
console.log("Length of last word in \"" + s2 + "\":", lengthOfLastWord(s2));

console.log("Is 'listen' and 'silent' anagrams?", isAnagram("listen", "silent"));
console.log("Is 'hello' and 'world' anagrams?", isAnagram("hello", "world"));