/**  1. Smallest missing integer
Write a function that will receive a single parameter, A, an array of integers. 
Each element of the array is an integer in the range -100,000 to 100,000. 
The maximum length of array A is 10,000. The function will return the smallest 
positive integer which is not in array A.

E.g. [1, 4, 6, 3, 2] returns 5. */

function smallestMissingInt(IntArr: number[]):number{

    return 1
}


//Testing
let reallyBigNumberArray: number[] = []
for (let i = 0; i < 10000; i++){
    reallyBigNumberArray.push(i)
}

// The following console.logs should equal true
console.log(typeof(smallestMissingInt([1])) === "number") 
console.log(smallestMissingInt([1,2,3]) === 4)      
console.log(smallestMissingInt([-1,-2,-3]) === 1)   
console.log(smallestMissingInt([1,0,-1]) === 2)     
console.log(smallestMissingInt([]) === 1)    
console.log(smallestMissingInt(reallyBigNumberArray) === 10000)       

