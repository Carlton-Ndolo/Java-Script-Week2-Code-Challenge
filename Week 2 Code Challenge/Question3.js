
// Firstly I defined a function called filterPrimeNumbers that filters out prime numbers from an array
function filterPrimeNumbers(array) {
    return array.filter(function(num) {
        // Then I used the if conditional to check whether the number is less than or equal to 1
        if (num <= 1) {
            // If it is true, it will return false to exclude it from the filtered array
            return false;
        }
        // Then next I iterate from 2 to the square root of the number
        for (var i = 2; i <= Math.sqrt(num); i++) {
            // Here we then check if the number is divisible by any number from 2 to the square root of the number
            if (num % i === 0) {
                // If true, return false to exclude it from the filtered array
                return false;
            }
        }
        // If the number passes the above conditions, return true to include it in the filtered array
        return true;
    });
}

// Use the example given to input array containing numbers
var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// We will then call the filterPrimeNumbers function with the input array and store the result in primeNumbers
var primeNumbers = filterPrimeNumbers(inputArray);

// Log the primeNumbers array to the console
console.log(primeNumbers);
