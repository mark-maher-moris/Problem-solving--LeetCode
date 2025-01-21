function missingNumber(nums: number[]): number {
    const n = nums.length;
    console.log("length is :" + n)

    let expectedSum: number = 0 ; 

    for (let i = 0 ; i <= n ;i ++){
        console.log("I: "+i); 
      expectedSum += i; 
    }

//    const expectedSum =(n * (n + 1) ) / 2;
        console.log("expectedSum is :" + expectedSum)

    // Calculate the sum of the given array
    const sumNums = nums.reduce((acc, num) => acc + num, 0);
    // The missing number is the difference between the two sums
            console.log("sumNums is :" + sumNums)

    return expectedSum - sumNums;
}

