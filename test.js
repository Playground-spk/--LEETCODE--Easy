//>>>>>>>>>>>>>>>>1480 Sum of 1d Array<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]


//>>>>>>>>>>>>>>>>1480 Sum of 1d Array<<<<<<<<<<<<<<<<<<<<<<<<<<<
let runningSum = function(nums) {
    let acculate = 0;
    let runningSum = [];

for (let num of nums ) {
  acculate += num;
  runningSum.push(acculate);

}

return runningSum;
};
// the greatest solution in this
// *******************************************************************************************************
// var runningSum = function(nums) {
//     /*
//         The current array index is increamented by the accumlator which is the new value of arr[i]
        
//         Example trace:
        
//         input:
//         [1,2,3,4]
        
//             acc i  arr                return value
//             0   0  1,2,3,4            0 + 1 = 1
//             1   1  1,2,3,4            1 + 2 = 3
//             3   2  1,3,3,4            3 + 3 = 6
//     end  => 6   3  1,3,6,4            6 + 4 = 10
//             10  4  1,3,6,10
        
//     */
//         nums.reduce((acc, _, i, arr) => arr[i] += acc )
//         return nums
    
//     };
// *******************************************************************************************************

// =========================================================================================================
//1431 Kids With the Greatest Number of Candies    

let kidsWithCandies = function(candies, extraCandies) {
    let hightestCanies = 0;

    for(let kid of candies){
        if(kid > hightestCanies) hightestCanies = kid
    }

    let checkCandies =  candies.map(kid=> kid + extraCandies >= hightestCanies )

    return  checkCandies;
    
};

// =========================================================================================================

//1470	Shuffle the Array  

  let shuffle = function(nums, n) {

    let round = Math.floor(nums.length/(n*2));
    let arrSuffled = [];

    for(let i =0; i < round;i++){
       for(let run = 0; run < n;run++){
           let x = (i*n)+run;
           let y = ((i+1)*n)+run;
           arrSuffled.push(nums[x])
           arrSuffled.push(nums[y]);
       }
    }

    if(nums.length%n !==0){
        console.log(n)
        console.log(round)
        nums.splice(0,n*(round*2));

        arrSuffled = [...arrSuffled,...nums]
    }

    

    return arrSuffled;

};

console.log(shuffle([1,2,3,4,5,6],3))





// =========================================================================================================