class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    /*
    1. Create a freq map
    2. Apply bucket sort to map respective numbers with their frequencies in a
    bucket manner - Ex. 0 - {3, 6}, 1 - {3, 4, 5}, 2 - {3}, 3 - {9, 10}...
    3. Return the k most frequent elements
    */
    topKFrequent(nums, k) {
        let map = {};
        let bucket = [];
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            if (!map[nums[i]]) {
                map[nums[i]] = 1;
            } else {
                map[nums[i]]++;
            }
        }

        for (let [num, freq] of Object.entries(map)) {
            if (!bucket[freq]) {
                bucket[freq] = new Set().add(num);
            } else {
                bucket[freq] = bucket[freq].add(num);
            }
        }

        for (let i = bucket.length-1; i >= 0; i--) {
            if (bucket[i]) result.push(...bucket[i]);
            if (result.length === k) break;
        }

        return result
    }
}
