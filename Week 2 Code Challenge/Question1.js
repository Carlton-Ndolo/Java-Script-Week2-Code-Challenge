// At first, I will name  a function called swapingCase that takes an inputString as the parameter
function swapingCase(inputString) {
    // I then initialized an empty string variable to keep the result of swapping cases
    var changedString = '';

    // We will then loop through each character of the input string
    for (var i = 0; i < inputString.length; i++) {
       
        var currentLetter = inputString[i];

        // The if conditional will help us check if the current letter is uppercased
        if (currentLetter === currentLetter.toUpperCase()) {   // If it is uppercase, it will be converted  to lowercase and added to changedString
            changedString += currentLetter.toLowerCase();
        } else {
            // If it is lowercase, we will convert it to uppercase and add to changedString
            changedString += currentLetter.toUpperCase();
        }
    }
    return changedString;
}


var inputString = 'The Quick Brown Fox';   // here I defined an input string

// Here I called the swapingCase function with the input string and had the result in outputString
var outputString = swapingCase(inputString);

// I console.log the output string
console.log(outputString);
