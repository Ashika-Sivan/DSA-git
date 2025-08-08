function twoSum(nums,target){

    let map={}
    for(let i=0;i<nums.length;i++){
        let c=target=nums[i]

        if(map[c]!==undefined){
            return [map[c],i]
        }
        map[nums[i]],i
    }
    return null
}