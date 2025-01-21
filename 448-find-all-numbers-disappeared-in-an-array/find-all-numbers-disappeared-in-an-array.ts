function findDisappearedNumbers(nums: number[]): number[] {
    let missed: number[] = [];
    let numSet = new Set(nums);

    for (let i = 1; i <= nums.length; i++) {
        if (!numSet.has(i)) { 
            missed.push(i);
        }
    }
 
    return missed;
}