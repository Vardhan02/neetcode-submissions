class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    /*
    1. Join the array of strings with a length-prefix and delimiter to handle any characters.
    2. Decode the received string by reading the length and jumping to the next segment.
    */
    encode(strs) {
        let res = "";
        for (let s of strs) {
            res += s.length + "#" + s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") j++;
            let length = parseInt(str.substring(i, j));
            res.push(str.substring(j + 1, j + 1 + length));
            i = j + 1 + length;
        }
        return res;
    }
}