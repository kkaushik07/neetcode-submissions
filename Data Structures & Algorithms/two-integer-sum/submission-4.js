class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let twoSumMap = {}

        for(let i = 0; i<nums.length; i++) {
            let complement = target - nums[i];
            if(twoSumMap[complement] !== undefined) {
                return [twoSumMap[complement],i]
            }
            twoSumMap[nums[i]] = i
        }
    }
}
