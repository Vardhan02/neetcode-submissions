class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    /*
    1. Split, sort, and join each substring of the strs array
    2. Map the strings
    3. Push the respective strings to the sorted map if the sorted key
    is not already present
    4. Return the object values
    */
    groupAnagrams(strs) {
        let sorted = strs.map((str) => str.split("").sort().join(""));
        
        let map = {};

        for (let i = 0; i < sorted.length; i++) {
            if (!map[sorted[i]]) {
                map[sorted[i]] = [strs[i]];
            } else {
                map[sorted[i]].push(strs[i])
            }
        }

        return Object.values(map);
    }
}
