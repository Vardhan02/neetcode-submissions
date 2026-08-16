class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // 1. Create a hash map with nums elements and their respective indices
    // 2. Check if the target's complement exists for each element
    // 3. If exists, get the index of the complement and return both current
    // index and complement index
    
    twoSum(nums, target) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (map.has(complement)) {
                return [i, map.get(complement)];
            } else {
                map.set(nums[i], i);
            }
        }
    }
}
