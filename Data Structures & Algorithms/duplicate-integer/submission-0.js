class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mapObj = {}
        for(let i=0; i < nums.length; i++){
            if(mapObj.hasOwnProperty(nums[i])){          
                return true
            } else {
                mapObj[nums[i]] = nums[i]
            }
        }
        return false
    }
}
