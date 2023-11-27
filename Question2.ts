/** 2. Most common consecutive repeated array value
Write a function that will receive a single parameter, A, an array
of strings. The strings will all be up to 5 characters from the
lowercase English alphabet. Return an integer representing the
highest number of consecutive repeated strings in array A.

E.g.: [‘", ‘jq’, ‘bpa’, ‘bpa’, ‘q’] returns 2. */

function findCommonConsRepValue(strArr:string[]):number{

    return 1
}

// The Basics
console.log(typeof(findCommonConsRepValue([])) === "number")
console.log(findCommonConsRepValue(["a", "b", "b", "c", "d"]) === 2)
console.log(findCommonConsRepValue(["a", "b", "b", "a", "d", "a"]) === 2)

//The Extemes
console.log(findCommonConsRepValue([]) === 0)
console.log(findCommonConsRepValue(["a", "a", "a", "a", "a", "a"]) === 6)

// Throw in the question example because why not? you can't have enough testing.
console.log(findCommonConsRepValue(["a", "jq", "bp", "bp", "q"]) === 2)