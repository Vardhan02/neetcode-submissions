class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // 1. Create s freq hashmap
    // 2. Subtract t string's letter with the s string's map freq
    // 3. Return true if everything passes
    isAnagram(s, t) {
        let map = {}
        if (s.length !== t.length) return false;
        
        for (let i = 0; i < s.length; i++) {
            let letter = s[i];
            if (!map[letter]) {
                map[letter] = 1;
            } else {
                map[letter]++;
            }
        }

        for (let i = 0; i < t.length; i++) {
            let letter = t[i]
            if (map[letter] === undefined) {
                return false;
            }
            if (map[letter] < 1) {
                return false;
            }
            map[letter]--;
        }

        return true;
    }
}
