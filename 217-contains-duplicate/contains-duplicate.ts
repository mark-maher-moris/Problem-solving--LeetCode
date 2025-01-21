function containsDuplicate(nums: number[]): boolean {
    let tempSet =new  Set <number>();
    for (let num  of nums ){
        tempSet.add(num); 


    }
    if(tempSet.size !== nums.length){
return true  ; 
    }else{
        return false ; 
    }
};