/** 2. Most common consecutive repeated array value
Write a function that will receive a single parameter, A, an array
of strings. The strings will all be up to 5 characters from the
lowercase English alphabet. Return an integer representing the
highest number of consecutive repeated strings in array A.

E.g.: [‘a’, ‘jq’, ‘bpa’, ‘bpa’, ‘q’] returns 2. */

function findCommonConsRepValue(strArr:string[]):number{
    // Check to make sure there are values in the array
    if(strArr.length > 0) {
        // create 2 pointers
        let maxConsec:number = 0
        let currentConsec:number = 0
        
        // Iterate between each value in the array, if there is a match increase the counter, reset the counter on a non match
        for(let i:number = 1; i <= strArr.length; i++){
                if (strArr[i-1] === strArr[i]) {
                    currentConsec++
                    maxConsec = currentConsec > maxConsec ? currentConsec : maxConsec
                } else {
                    currentConsec = 0
                }
            }
            return maxConsec + 1
    } else {
        return 0
    }
    
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