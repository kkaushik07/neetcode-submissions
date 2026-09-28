class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * check for length is same => no => return
     */
    isAnagram(s, t) {
        let mapObj = {}
        if(s.length !== t.length) {
            return false
        }
        for(const char of s) {
           mapObj[char] = (mapObj[char] || 0) + 1
        }

        for(const char of t) {
            if(!mapObj[char]) return false
            mapObj[char]-- 
        }
        return true
    }
}
