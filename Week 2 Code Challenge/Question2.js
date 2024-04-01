// I first defined a function called makeArray 
function makeArray(start, end) {
    // Here I initialized an empty array to store the result
    var result = [];

    // I used the if conditional to check if the start is less than or equal to end
    if (start <= end) {
        // If true, it will loop from start to end and push each value to the result array
        for (var i = start; i <= end; i++) {
            result.push(i);
        }
    } else {
        // If start is greater than the end, it will loop from start to end then push each value to the result array
        for (var i = start; i >= end; i--) {
            result.push(i);
        }
    }
    return result;
}

// Here I tested the function with different inputs and logged the results to the console
console.log(makeArray(2, 6)); 
console.log(makeArray(-3, 4)); 