/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    intersect(a, b) {
        // code here
        const st = new Set(a);
        
        const res = [];
        for(let i = 0; i < b.length; i++) {
            if(st.has(b[i])) {
                res.push(b[i]);
                st.delete(b[i])
            }
        }
        
        return res;
    }
}