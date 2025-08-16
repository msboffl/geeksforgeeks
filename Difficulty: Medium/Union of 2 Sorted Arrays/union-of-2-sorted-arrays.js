/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    findUnion(a, b) {
        // code here
        let res = [];
        
        let i = 0;
        let j = 0;
        
        while(i < a.length && j < b.length) {
            if(a[i] === b[j]) {
                if(res.length === 0 || res[res.length-1] != a[i]) {
                    res.push(a[i])
                }
                i++;
                j++;
            } else if(a[i] < b[j]) {
                if(res.length === 0 || res[res.length-1] != a[i]) {
                    res.push(a[i])
                }
                i++;
            } else {
                if(res.length === 0 || res[res.length-1] != b[j]) {
                    res.push(b[j])
                }
                j++;
            }
        }
        
        while (i < a.length) {
            if (res.length === 0 || res[res.length - 1] !== a[i]) {
                res.push(a[i]);
            }
            i++;
        }

        while (j < b.length) {
            if (res.length === 0 || res[res.length - 1] !== b[j]) {
                res.push(b[j]);
            }
            j++;
        }
        
        
        return res;
    }
}