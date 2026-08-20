class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    /*
    Logic:
    1. By keeping "1" as the placeholder, multiply rest of the elements with each other (i * i+1), and store it into an array
    2. Repeat the same, but in the reverse order
    3. Return the resultant array
    */
    productExceptSelf(nums) {
        let res = [];
        let start1 = 1;

        for (let i = 0; i < nums.length; i++) {
            res.push(start1);
            start1 = start1 * nums[i];
        }

        let start2 = 1;

        for (let i = nums.length-1; i >= 0; i--) {
            res[i] = start2 * res[i];
            start2 = start2 * nums[i];
        }

        return res;
    }
}
