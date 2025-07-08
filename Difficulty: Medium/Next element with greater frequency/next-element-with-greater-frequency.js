class Solution {
    findGreater(arr) {
        // code here
        let n = arr.length;
    let freq = {};

    // Build frequency map
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let res = new Array(n).fill(-1); 
    let s = [];

    for (let i = 0; i < n; i++) {
        
        // While current frequency is 
        // greater than frequency at stack top
        while (s.length > 0 && freq[arr[i]] > 
                    freq[arr[s[s.length - 1]]]) {
            res[s.pop()] = arr[i];
        }
        s.push(i);
    }

    return res;
    }
}