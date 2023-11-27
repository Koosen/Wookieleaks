/**  1. Smallest missing integer
Write a function that will receive a single parameter, A, an array of integers. 
Each element of the array is an integer in the range -100,000 to 100,000. 
The maximum length of array A is 10,000. The function will return the smallest 
positive integer which is not in array A.

E.g. [1, 4, 6, 3, 2] returns 5. */

function smallestMissingInt(intArr: number[]):number{
    // Remove dupilcates and use a set for quicker searching
    const intSet = new Set(intArr);

    // iterate though the set starting from 1 to the set length
    let intToFind: number = 1;
    let isAnswerFound: boolean = false;
    
    while (!isAnswerFound && intToFind <= intSet.size){
        if(intSet.has(intToFind)){
            intToFind++;
        } else {
            isAnswerFound = true;
        }
    }

    return intToFind;
}


// Testing set up
let reallyBigNumberArray: number[] = [];
for (let i = 0; i < 10000; i++){
    reallyBigNumberArray.push(i);
}

// The Basics. 
console.log(typeof(smallestMissingInt([1])) === "number");
console.log(smallestMissingInt([1,2,3]) === 4);
console.log(smallestMissingInt([-1,-2,-3]) === 1);
console.log(smallestMissingInt([1,0,-1]) === 2);

// The Extremes.
console.log(smallestMissingInt([]) === 1);
console.log(smallestMissingInt(reallyBigNumberArray) === 10000);

// Throw in the question example because why not? you can't have enough testing.
console.log(smallestMissingInt([1, 4, 6, 3, 2]) === 5);
