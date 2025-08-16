/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    findUnion(a, b) {
        // code here
        const st = new Set();
        
        for(const i of a) {
            st.add(i)
        }
        
        for(const i of b) {
            st.add(i)
        }
        
        
        const res = [];
        for(const i of st) {
            res.push(i);
        }
        
        return res;
    }
    
}
